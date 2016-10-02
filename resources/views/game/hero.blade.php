@extends('layouts.game')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <strong>{{ $hero->name }}</strong>, {{ trans('game.gender.'.$hero->hero_sex) }} {{ trans('game.races.'.$hero->hero_race) }}
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
                        {{----}}
                        <ul class="nav nav-pills nav-justified">
                            <li role="presentation" class="active">
                                <a href="#params" aria-controls="params" role="tab" data-toggle="tab">@lang('ui.label.params')</a>
                            </li>
                            <li role="presentation">
                                <a href="#equip" aria-controls="equip" role="tab" data-toggle="tab">@lang('ui.label.equip')</a>
                            </li>
                        </ul>
                        <div class="row">
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active" id="params">
                                    @include('game.mixins.params')
                                </div>
                                <div role="tabpanel" class="tab-pane" id="equip">
                                    @include('game.mixins.equip')
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script type="text/javascript">
        $(function () {
            $('#heroLink').addClass('active');
        });
    </script>
@endsection