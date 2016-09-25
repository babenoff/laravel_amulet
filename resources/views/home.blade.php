@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Лобби</div>
                    @if(isset($errors))
                        @foreach($errors as $error)
                            <div class="help-block">
                                <strong>{{ $error }}</strong>
                            </div>
                        @endforeach
                    @endif
                    <div class="panel-body">

                        тут новости
                    </div>
                    <hr>
                    <div class="panel-body">
                        @if(count($heroes)<1)
                            Еще нет ни одного героя
                        @else
                            <ul class="list-group">
                                @foreach($heroes as $hero)
                                    <li>
                                        <div class="panel panel-default">
                                            <div class="panel-body">
                                                <div class="panel-more">
                                                    <img src="{{ url('/images/'.$hero->hero_race.'_logo.jpg') }}"
                                                         height="80"/>
                                                </div>
                                                <div class="panel-info">
                                                    <p><strong>{{$hero->name}}</strong></p>
                                                    <div class="trees">
                                                        @foreach($skills_tree[$hero->id] as $key => $skill)
                                                            <div class="tree" style="margin-left: {{ 4+14*$key }}px;" data-toggle="tooltip" data-placement="right" title="@if(Lang::has('skills.classes.'.$hero->hero_class))
                                                            {{ trans('skills.classes.'.$hero->hero_class) }}
                                                            @else
                                                            {{ trans('skills.classes.0') }}
                                                            @endif">
                                                                <img src="{{ url('/images/'.config('game.skills_tree_icon.'.$skill)) }}"/>
                                                            </div>
                                                        @endforeach
                                                    </div>
                                                    {{--<p>

                                                    </p>
                                                    <p>
                                                        <span class="small">
                                                            {{ trans('game.races_desc.'.$hero->hero_race) }}
                                                        </span>
                                                    </p>--}}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                @endforeach
                            </ul>
                        @endif
                        @if(count($heroes) < config('game.max_heroes'))
                            <a class="btn btn-link" href="{{ url('/new-hero')  }}">Создать нового героя</a>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
