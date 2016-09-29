<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    const ROLE_USER = 1 << 0;
    const ROLE_MODER = 1 << 1;
    const ROLE_QW = 1 << 2;

    const ROLE_ADMIN = 1 << 10;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'name', 'email', 'password', 'role'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function heroes(){
        return $this->hasMany('App\Hero');
    }

    /**
     * @param $heroId
     * @return $this|bool
     */
    public function heroExists($heroId){
        $heroes = $this->heroes();
        $exists = false;
        $heroes->getEager()->each(function($hero)use($heroId, &$exists){
            if((int)$heroId == $hero->id){
                $exists = true;
                return;
            }
        });
        return $exists;
    }

    public function hero($id){
        $heroes = $this->heroes();
        $currHero = $heroes->getEager()->first();
        $heroes->getEager()->each(function($hero)use($id, $currHero){
            if($hero->id == $id){
                $currHero = $hero;
                return;
            }
        });
        return $currHero;
    }
}
