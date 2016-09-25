<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOnlineHeroesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('online_heroes', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('hero_id')->unsigned();
            $table->integer('loc_id')->unsigned();

            $table->foreign('hero_id')
                ->references('id')->on('heroes')
                ->onDelete('cascade');

            $table->foreign('loc_id')
                ->references('id')->on('game_locations')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('online_heroes');
    }
}
