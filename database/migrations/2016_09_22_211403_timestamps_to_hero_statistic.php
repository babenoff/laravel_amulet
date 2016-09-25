<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TimestampsToHeroStatistic extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('hero_statistics', function(Blueprint $t){
            $t->timestamps();
        });
        Schema::table('hero_professions', function(Blueprint $t){
            $t->timestamps();
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
        Schema::table('hero_statistics', function(Blueprint $t){
            $t->dropTimestamps();
        });
        Schema::table('hero_professions', function(Blueprint $t){
            $t->dropTimestamps();
        });
    }
}
