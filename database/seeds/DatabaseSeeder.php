<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->command->warn("Останавливаем игру");
        $this->command->call("down");
        sleep(1);
        // $this->call(UsersTableSeeder::class);
        $this->call(ItemsSeeder::class);
        $this->call(EffectsSeed::class);
        $this->call(LocationsSeed::class);
        $this->command->warn("Запускаем игру");
        $this->command->call("up");
        $this->command->info("Игра запущена");
    }
}
