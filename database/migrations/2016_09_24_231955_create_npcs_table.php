<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNpcsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('npc_lib', function (Blueprint $table) {
            $table->increments('id');
            $table->string('hash')->unique();
            $table->string('title');
            $table->string('race');
            $table->timestamps();

            $table->index('title');
            $table->index('hash');
            $table->index('race');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('npcs');
    }
}
