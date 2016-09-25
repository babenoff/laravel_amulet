<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHeroProfessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hero_professions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('hero_id')->unsigned();

            //собирательство
            $table->integer('mining')->default(0); //горное дело
            $table->integer('logging')->default(0); //лесозаготовка
            $table->integer('herbalism')->default(0); //травничество
            $table->integer('fishing')->default(0); //рыболовство
            $table->integer('farming')->default(0); //животноводство
            $table->integer('argiculture')->default(0); //земледелие

            //профессии
            $table->integer('alchemy')->default(0); //алхимия
            $table->integer('decorator')->default(0); //декоратор
            $table->integer('engineer')->default(0); //инженернгое дело
            $table->integer('tanner')->default(0); //кожевничество
            $table->integer('stealing')->default(0); //воровство
            $table->integer('construction')->default(0); //строительство
            $table->integer('blacksmithing')->default(0); //кузнечное дело
            $table->integer('stonemason')->default(0); //обработка камня
            $table->integer('weaponry')->default(0); //оружейное дело
            $table->integer('trade')->default(0); //торговля
            $table->integer('cooking')->default(0); //кулинария
            $table->integer('typography')->default(0); //книгопечатание
            $table->integer('lingering')->default(0); //книгопечатание

            $table->foreign('hero_id')
                ->references('id')->on('heroes')
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
        Schema::dropIfExists('hero_professions');
    }
}
