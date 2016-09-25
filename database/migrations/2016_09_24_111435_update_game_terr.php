<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateGameTerr extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('game_territories', function(Blueprint $t){
            $t->string('hash')->after('id');
            $t->string('climate');
            $t->json('levels');
            $t->index('climate');
            $t->index('hash');
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
        Schema::table('game_territories', function(Blueprint $t){
            $t->removeColumn('hash');
            $t->removeColumn('levels');
            $t->removeColumn('climate');
            //$t->index('climate');
            //$t->index('hash');
        });
    }
}
