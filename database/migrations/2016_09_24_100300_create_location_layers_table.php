<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLocationLayersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('location_layers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('hash')->unique();
            $table->string('title');
            $table->text('description');
            $table->integer('terr_id')->unsigned();
            $table->timestamps();
            $table->index('title');
            $table->index('hash');
            $table->foreign('terr_id')
                ->references('id')->on('game_territories')
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
        Schema::dropIfExists('location_layers');
    }
}
