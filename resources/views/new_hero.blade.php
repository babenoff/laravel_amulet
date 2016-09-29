@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading"><strong><span class="text-uppercase text-primary">{{ trans('ui.label.new-hero') }}</span></strong> </div>
                    <div class="panel-body">
                        <form class="form-horizontal" role="form" method="POST" action="{{ url('/new-hero') }}">
                            {{ csrf_field() }}
                            <div class="form-group{{ $errors->has('hero_name') ? ' has-error' : '' }}">
                                <label for="name" class="col-md-4 control-label">Имя персонажа</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" name="hero_name"
                                           value="{{ old('hero_name') }}" required autofocus>

                                    @if ($errors->has('hero_name'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('hero_name') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>
                            <hr>
                            <div class="h4 text-center">Пол</div>
                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="sex" value="male" checked> мужчина
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="sex" value="female"> женщина
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="h4 text-center">Расса</div>
                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="race" value="nui" checked> @lang('game.races.nui')
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="race" value="elf"> @lang('game.races.elf')
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="race" value="har"> @lang('game.races.har')
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="race" value="fer"> @lang('game.races.fer')
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="h4 text-center">Начальная ветка</div>
                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    @foreach($start_skills as $key => $skill)
                                        <div class="radio">
                                            <label>
                                                <input type="radio" name="class" value="{{$key}}" @if($key == 1) checked @endif> {{$skill}}
                                            </label>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-8 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ trans('ui.create') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection