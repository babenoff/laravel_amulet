<?php

use Illuminate\Database\Seeder;

class EffectsSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $disc = \Illuminate\Support\Facades\Storage::disk('public');
        if($disc->exists('effects.json')) {
            \Illuminate\Support\Facades\DB::table('effects')->delete();
            $this->command->warn('Очистка библиотеки.');
            $itemsLib = $disc->get('effects.json');
            $itemsLib = json_decode($itemsLib, true);
            $i = 0;
            $max = count($itemsLib);
            $this->command->info("Всего эффектов: " . $max);
            $this->command->info("Добавление эффектов");
            do {
                \App\Effect::create([
                    'key' => $itemsLib[$i]['key'],
                    'title' => $itemsLib[$i]['title'],
                    'type' => $itemsLib[$i]['type'],
                    'description' => $itemsLib[$i]['dsc'],
                    'effect' => json_encode($itemsLib[$i]['eff'])
                ]);
                $this->command->info($itemsLib[$i]['key'] . " добавлен");
                $i++;
            } while ($i < $max);
        } else {
            $this->command->warn('Отсутствует библиотека effects.json');
        }
    }
}
