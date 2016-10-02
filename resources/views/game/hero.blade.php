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
                        <div class="row">
                            <div class="col-md-4">
                                @include('game.mixins.params')
                            </div>
                            <div class="col-md-4">
                                @include('game.mixins.equip')
                            </div>
                            <div class="col-md-4 col-md-offset-8"></div>
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