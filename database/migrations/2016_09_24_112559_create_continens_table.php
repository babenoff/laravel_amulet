<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContinensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('continents', function (Blueprint $table) {
            $table->increments('id');
            $table->string('hash')->unique();
            $table->string('title');

            $table->index('title');
            $table->index('hash');
            $table->timestamps();
        });
        Schema::table('game_territories', function (Blueprint $t) {
            $t->integer('cont_id')->unsigned();

            $t->foreign('cont_id', 'terr_continent')
                ->references('id')->on('continents')
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
        Schema::table('game_territories', function (Blueprint $t) {
            $t->dropForeign('terr_continent');
        });
        Schema::dropIfExists('continents');
    }
}
