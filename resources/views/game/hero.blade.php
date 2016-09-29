@extends('layouts.game')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <strong>{{ $game->hero->name }}</strong>, {{ trans('game.gender.'.$game->hero->hero_sex) }} {{ trans('game.races.'.$game->hero->hero_race) }}
                    </div>
                    @if(isset($errors))
                        <ul class="list-unstyled bg-warning">
                            @foreach($errors as $error)
                                <li>
                                    {{$error}}
                                </li>
                            @endforeach
                        </ul>
                    @endif
                    <div class="panel-body">

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection