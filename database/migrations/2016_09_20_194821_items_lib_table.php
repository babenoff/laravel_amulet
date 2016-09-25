<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ItemsLibTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('items_lib', function(Blueprint $t){
            $t->increments('id');
            $t->string('key')->unique();
            $t->string('title');
            $t->string('description');
            $t->json('options');
            $t->index('title');
            //$t->index('key');
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
        Schema::dropIfExists('items_lib');
    }
}
