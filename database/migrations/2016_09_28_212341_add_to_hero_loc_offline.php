<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddToHeroLocOffline extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('heroes', function(Blueprint $t){
            $t->string('loc_offline')->nullable();

            $t->foreign('loc_offline')
                ->references('hash')->on('game_locations')
            ->onUpdate('cascade')
            ->onDelete('set null');
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
        Schema::table('heroes', function (Blueprint $t){
            $t->dropForeign('heroes_loc_offline_foreign');
            $t->dropColumn('loc_offline');
        });
    }
}
