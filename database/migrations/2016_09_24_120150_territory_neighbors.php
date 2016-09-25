<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TerritoryNeighbors extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('territory_neighbors', function (Blueprint $t){
            $t->string('parent');
            $t->string('child');
            $t->string('type');

            $t->foreign('parent')
                ->references('hash')->on('game_territories')
                ->onDelete('cascade');
            $t->foreign('child')
                ->references('hash')->on('game_territories')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('territory_neighbors');
    }
}
