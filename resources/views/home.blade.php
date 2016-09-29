@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading"><strong><span class="text-uppercase text-primary">{{ trans('ui.label.lobby') }}</span></strong> </div>
                    @if(isset($errors))
                        <ul class="list-unstyled bg-warning">
                        @foreach($errors as $error)
                            <li>
                                {{$error}}
                            </li>
                        @endforeach
                        </ul>
                    @endif
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
                                                    <p>
                                                        {{ $hero->locOffline->layer->territory->continent->title }},
                                                        {{ $hero->locOffline->layer->territory->title }}
                                                        @if($hero->locOffline->layer->territory->title != $hero->locOffline->layer->title)
                                                            ,{{ $hero->locOffline->layer->title }}
                                                        @endif
                                                    </p>
                                                    <p><strong>{{$hero->name}}</strong></p>
                                                    <div class="trees">
                                                        @foreach($skills_tree[$hero->id] as $key => $skill)
                                                            <div class="tree" style="margin-left: {{ 4+14*$key }}px;" data-toggle="tooltip" data-placement="right" title="@if(Lang::has('skills.classes.'.$hero->hero_class))
                                                            {{ trans('skills.classes.'.$hero->hero_class) }}
                                                            @else
                                                            {{ trans('skills.classes.0') }}
                                                            @endif">
                                                                <img src="{{ asset('/images/'.config('game.skills_tree_icon.'.$skill)) }}"/>
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
                                                <div class="clearfix"></div>
                                                <div class="panel-info">
                                                    <div class="btn-group-justified" role="group" aria-label="{{ trans('Game') }}">
                                                        <a class="btn btn-success" href="#" onclick="event.preventDefault();
                                                 document.getElementById('connectGameForm{{$hero->id}}').submit();"><strong class="text-uppercase">{{ trans('ui.label.connect-game') }}</strong></a>
                                                        <a class="btn btn-danger" href="#" onclick="event.preventDefault();
                                                 document.getElementById('removeHeroForm{{$hero->id}}').submit();"><strong class="text-uppercase">{{ trans('ui.label.remove') }}</strong></a>
                                                        <form id="connectGameForm{{$hero->id}}" action="{{ route('connect-game')  }}" method="post" style="display: none">
                                                            <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                                            <input type="hidden" name="heroId" value="{{$hero->id}}">
                                                        </form>
                                                        <form id="removeHeroForm{{$hero->id}}" action="{{ route('connect-game', ['heroId' => $hero->id])  }}" method="post" style="display: none">
                                                            <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                                            <input type="hidden" name="heroId" value="{{$hero->id}}">
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                @endforeach
                            </ul>
                        @endif
                        @if(count($heroes) < config('game.max_heroes'))
                            <a class="btn btn-link" href="{{ route('new-hero')  }}">Создать нового героя</a>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
