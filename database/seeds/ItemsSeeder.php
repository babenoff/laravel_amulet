<?php

use Illuminate\Database\Seeder;

class ItemsSeeder extends Seeder
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
        if($disc->exists('items.json')) {
            \Illuminate\Support\Facades\DB::table('items_lib')->delete();
            $this->command->warn('Очистка библиотеки.');
            $itemsLib = $disc->get('items.json');
            $itemsLib = json_decode($itemsLib, true);
            $i = 0;
            $max = count($itemsLib);
            $this->command->info("Всего предметов: " . $max);
            $this->command->info("Добавление предметов");
            do {
                \App\Item::create([
                    'key' => $itemsLib[$i]['key'],
                    'type' => $itemsLib[$i]['type'],
                    'cost' => isset($itemsLib[$i]['cst']) ? json_encode($itemsLib[$i]['cst']) : json_encode([0,0,0]),
                    'description' => $itemsLib[$i]['dsc'],
                    'options' => json_encode($itemsLib[$i]['opt'])
                ]);
                $this->command->info($itemsLib[$i]['key'] . " добавлен");
                $i++;
            } while ($i < $max);
        } else {
            $this->command->warn('Отсутствует библиотека items.json');
        }
    }
}
