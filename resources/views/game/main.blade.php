@extends('layouts.game')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        @if($game->loc->layer->description != "")
                            <p>
                                @include('game.mixins.loc_title')
                            </p>
                            <p>
                                @include('game.mixins.coordinate')
                            </p>
                            <p>
                                {{$game->loc->layer->description}}
                            </p>
                            @else
                            <div>
                                @include('game.mixins.loc_title')
                            </div>
                            <div>
                                @include('game.mixins.coordinate')
                            </div>
                        @endif
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
                        <div>
                            @for($i = 0; $i < count($doors); $i+=2)
                                <a class="btn btn-link" href="{{ route('go', ['locId' => $doors[$i+1]]) }}">{{$doors[$i]}}</a>
                            @endfor
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection