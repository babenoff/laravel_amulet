<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class HeroInventory extends Migration
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
            $t->text('inventory');
            $t->text('bank');
            $t->text('equip');
            $t->json('money');
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
        Schema::table('heroes', function(Blueprint $t){
            $t->removeColumn('inventory');
            $t->removeColumn('bank');
            $t->removeColumn('equip');
            $t->removeColumn('money');
        });
    }
}
