<?php

use Illuminate\Database\Seeder;
use Symfony\Component\Console\Helper\ProgressBar;

class LocationsSeed extends Seeder
{
    use \App\Console\ConsoleDecorator;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $disc = \Illuminate\Support\Facades\Storage::disk('res');
        if ($disc->exists('world.json')) {
            $this->_hr();
            $this->command->warn('Очитка мира...');
            \Illuminate\Support\Facades\DB::table('continents')->delete();
            $this->command->line('Мир очищен...');
            $this->_hr();
            $locations = $disc->get('world.json');
            $world = json_decode($locations, true);
            foreach ($world as $mainlandHash => $mainland) {
                $this->command->line("Добавляем материк " . $this->bold(
                        $this->color($mainland["title"], \App\Helper\ConsoleDecoration::ORANGE)
                    )
                );
                $this->_hr();
                $continent = \App\Continent::create([
                    "hash" => $mainlandHash,
                    "title" => $mainland["title"]
                ]);
                if (count($mainland["territories"]) > 0) {
                    $this->command->info('Добавляем территории на материк ' . $mainland["title"]);
                    foreach ($mainland["territories"] as $territoryHash => $territory) {
                        $this->command->warn($this->bold("\t>" . $territory["title"]));
                        $terr = new \App\Territory([
                            "hash" => $mainlandHash . "." . $territoryHash,
                            "title" => $territory["title"],
                            "description" => $territory["desc"],
                            "condition" => isset($territory["cond"]) ? $territory["cond"] : [],
                            "climate" => $territory["climate"],
                            "levels" => json_encode($territory["levels"])
                        ]);
                        $terr = $continent->territories()->save($terr);
                        if (isset($territory['locations']['factory'])) {
                            if (isset($territory['locations']['layers']['places']) and count($territory['locations']['layers']['places']) > 0) {
                                $this->command->comment("\t\tCоздаем участки");
                                foreach ($territory['locations']['layers']['places'] as $placeId => $place) {
                                    $terrPlace = new \App\LocationLayer([
                                        "hash" => $terr->hash . "." . snake_case($placeId),
                                        "title" => $place["title"],
                                        "description" => isset($place["desc"]) ? $place["desc"] : ''
                                    ]);
                                    $terr->layers()->save($terrPlace);
                                    $this->command->info("\t\t>" . $terrPlace->title);
                                    $this->command->getOutput()->writeln($this->bold(
                                            $this->color('Создаем позиции', \App\Helper\ConsoleDecoration::ORANGE)
                                        ) . ": ");
                                    $countLocs = count($place["locations_list"]);
                                    /** @var ProgressBar $pb */
                                    $pb = $this->command->getOutput()->createProgressBar($countLocs);
                                    $pb->setBarCharacter("<comment>.</comment>");
                                    //$pb = new ProgressBar($this->command->getOutput(), $max_X*$max_Y);
                                    $pb->setBarWidth(50);
                                    $pb->setFormat('verbose');
                                    $pb->start($countLocs);
                                    foreach ($place["locations_list"] as $locId => $locDoors) {
                                        $doors = [];
                                        for ($i = 0; $i < count($locDoors); $i++) {
                                            $doorName = &$locDoors[$i][0];
                                            $doorTo = &$locDoors[$i][1];
                                            $doorHashArr = explode(".", $doorTo);
                                            $doorTo = (count($doorHashArr) == 1) ? $terr->hash . "." . $doorTo : $doorTo;
                                            $doorName = preg_replace_callback("/{(?<id>[^\)]+)(\((?<name>.*)\))?}/", function ($matches) {
                                                return (!isset($matches["name"])) ? trans('ui.locations.doors.' . $matches["id"]) : trans('ui.locations.doors.' . $matches["id"], ["name" => $matches["name"]]);
                                            }, $doorName);
                                            array_push($doors, implode("|", $locDoors[$i]));
                                        }
                                        $location = new \App\Location([
                                            'hash' => $terr->hash . "." . $locId,
                                            'doors' => $doors
                                        ]);
                                        $terrPlace->locations()->save($location);
                                        $pb->advance();
                                    }
                                    $pb->finish();
                                    $this->command->line("\r\n");
                                }
                            }
                        }
                    }
                    $this->_hr();
                }
            }
            unset($terr);
            unset($territory);
            unset($mainlandHash);
            unset($mainland);
            $this->command->line("Делаем связи между территориями");
            foreach ($world as $mainlandHash => $mainland) {
                foreach ($mainland["territories"] as $territoryHash => $territory) {
                    if (isset($territory["nb"])) {
                        foreach ($territory["nb"] as $key => $value) {
                            $child = ($key == "portal") ? $value : $mainlandHash . "." . $value;
                            $this->command->line(
                                $this->color(
                                    $mainlandHash . "." . $territoryHash, \App\Helper\ConsoleDecoration::RED) . "->" . $this->color(
                                    $child, \App\Helper\ConsoleDecoration::ORANGE)
                            );
                            \Illuminate\Support\Facades\DB::table('territory_neighbors')->insert(
                                ["parent" => $mainlandHash . "." . $territoryHash, "child" => $child, "type" => $key]
                            );
                        }
                    }
                }
                $this->_hr();
            }
        } else {
            $this->command->error('Отсутствует world.json');
        }
    }

    protected function _hr()
    {
        $this->command->line('---');
    }

    private function getNeighborDoors($prefix, $x, $y, $max_X, $max_Y)
    {
        $doors = [];
        //west
        if ($x - 1 >= 0) {
            $doorId = $prefix . "." . ($x - 1) . "x" . $y;
            array_push($doors, 'плыть на запад;на запад;по дороге на запад;в :place на западе;по лесу на запад;к замку :castle на запад;');
            array_push($doors, $doorId);
        }
        //south
        if ($x + 1 <= $max_X) {
            $doorId = $prefix . "." . ($x + 1) . "x" . $y;
            array_push($doors, ':road на восток');
            array_push($doors, $doorId);
        }
    }

    protected function findLocLayer($layers, $x, $y)
    {
        foreach ($layers as $layerId => $layer) {
            if (in_array(implode('x', [$x, $y]), $layer['locations_list'])) {
                return $layerId;
            }
        }
        return false;
    }

    private function _replaceDoors($matches){

    }

}
