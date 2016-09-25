<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHeroesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('heroes', function (Blueprint $table) {
            //$table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->string('name')->unique();
            $table->string('hero_sex');
            $table->string('hero_race');
            $table->bigInteger('hero_class')->default(0);
            $table->json('hero_char');
            $table->json('hero_war');
            $table->json('hero_statistic');
            $table->json('hero_stats');
            $table->json('hero_effects');
            $table->timestamps();
            $table->foreign('user_id')
                ->references('id')->on('users')
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
        Schema::drop('heroes');
    }
}
