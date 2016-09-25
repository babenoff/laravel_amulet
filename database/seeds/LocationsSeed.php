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
        if($disc->exists('world.json')){
            $this->_hr();
            $this->command->warn('Очитка мира...');
            \Illuminate\Support\Facades\DB::table('continents')->delete();
            $this->command->line('Мир очищен...');
            $this->_hr();
            $locations = $disc->get('world.json');
            $world = json_decode($locations, true);
            foreach ($world as $mainlandHash => $mainland){
                $this->command->line("Добавляем материк ".$this->bold(
                    $this->color($mainland["title"], \App\Helper\ConsoleDecoration::ORANGE)
                    )
                );
                $this->_hr();
                $continent = \App\Continent::create([
                    "hash" => $mainlandHash,
                    "title" => $mainland["title"]
                ]);
                if(count($mainland["territories"]) > 0) {
                    $this->command->info('Добавляем территории на материк ' . $mainland["title"]);
                    foreach ($mainland["territories"] as $territoryHash => $territory) {
                        $this->command->warn($this->bold("\t>".$territory["title"]));
                        $terr = new \App\Territory([
                            "hash" => $mainlandHash.".".$territoryHash,
                            "title" => $territory["title"],
                            "description" => $territory["desc"],
                            "condition" => isset($territory["cond"]) ? $territory["cond"] : [],
                            "climate" => $territory["climate"],
                            "levels" => json_encode($territory["levels"])
                        ]);
                        $terr = $continent->territories()->save($terr);
                        if(isset($territory['locations']['factory'])) {
                            /*$max_X = $territory['locations']['factory'][0];
                            $max_Y = $territory['locations']['factory'][1];*/
                            if(\Illuminate\Support\Facades\Config::get('app.env') != 'production') {
                                $max_X = 5;
                                $max_Y = 5;
                            } else {
                                $max_X = $territory['locations']['factory'][0];
                                $max_Y = $territory['locations']['factory'][1];
                            }
                            $startLayer = new \App\LocationLayer([
                                "hash" => $terr->hash.".base_layer",
                                "title" => $territory["title"],
                                "description" => ''
                            ]);
                            $terr->layers()->save($startLayer);
                            $this->command->info("\t\t>Создаем базовый участок");
                            if(isset($territory['locations']['layers']['places']) and count($territory['locations']['layers']['places']) > 0){
                                $this->command->comment("\t\tCоздаем участки...");
                                foreach ($territory['locations']['layers']['places'] as $placeId => $place){
                                    $terrPlace = new \App\LocationLayer([
                                        "hash" => $terr->hash.".".snake_case($placeId),
                                        "title" => $place["title"],
                                        "description" => isset($place["desc"]) ? $place["desc"] : ''
                                    ]);
                                    $terr->layers()->save($terrPlace);
                                    $this->command->info("\t\t>".$terrPlace->title);
                                }
                            }
                            $this->command->getOutput()->writeln($this->bold(
                                    $this->color('Создаем позиции...',\App\Helper\ConsoleDecoration::ORANGE)
                                ).": ");
                            /** @var ProgressBar $pb */
                            $pb = $this->command->getOutput()->createProgressBar($max_X*$max_Y);
                            $pb->setBarCharacter("<comment>-</comment>");
                            //$pb = new ProgressBar($this->command->getOutput(), $max_X*$max_Y);
                            $pb->setBarWidth(50);
                            $pb->setFormat('verbose');
                            $pb->start($max_X*$max_Y);
                            for ($x = 0; $x < $max_X; $x++){
                                for($y = 0; $y < $max_Y; $y++){
                                    $locHash = $territoryHash.".".$x."x".$y;
                                    if(isset($territory['locations']['layers']['places'])) {
                                        $layerId = $this->findLocLayer($territory['locations']['layers']['places'], $x, $y);
                                        if (false === $layerId) {
                                            $layer = $startLayer;
                                        } else {
                                            $layer = \App\LocationLayer::where('hash', $terr->hash . "." . $layerId)->get();
                                            $layer = $layer[0];
                                        }
                                    } else {
                                        $layer = $startLayer;
                                    }
                                    //var_dump($layer);
                                    $terrPosition = new \App\Location([
                                        'hash' => $layer->hash.".".$x."x".$y,
                                        'doors' => [],
                                    ]);
                                    $layer->locations()->save($terrPosition);
                                    //$terr->layers()->save($terrPosition);
                                    //$this->command->comment($locHash);
                                    $pb->advance();
                                }
                            }
                            $pb->finish();
                            $this->_hr();
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

    protected function _hr(){
        $this->command->line('---');
    }

    private function getNeighborDoors($prefix, $x, $y, $max_X, $max_Y){
        $doors = [];
        //west
        if($x-1 >= 0){
            $doorId = $prefix.".".($x-1)."x".$y;
            array_push($doors, 'плыть на запад;на запад;по дороге на запад;в :place на западе;по лесу на запад;к замку :castle на запад;');
            array_push($doors, $doorId);
        }
        //south
        if($x + 1 <= $max_X){
            $doorId = $prefix.".".($x+1)."x".$y;
            array_push($doors, ':road на восток');
            array_push($doors, $doorId);
        }
    }

    protected function findLocLayer($layers, $x, $y){
        foreach ($layers as $layerId => $layer){
            if(in_array(implode('x', [$x, $y]), $layer['locations_list'])){
                return $layerId;
            }
        }
        return false;
    }

}
