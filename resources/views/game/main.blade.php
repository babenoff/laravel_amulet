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
                        <div class="row">
                            <div class="col-md-4">
                                @include('game.mixins.journal')
                            </div>
                            <div class="col-md-4 col-md-offset-3">

                            </div>
                            <div class="col-md-4 col-md-offset-9">

                            </div>
                        </div>

                        <div class="row">
                            <div class="panel">
                                @for($i = 0; $i < count($doors); $i+=2)
                                    @if(!in_array($doors[$i+1], $bad_doors))
                                        <span>
                                    <a class="btn btn-link"
                                       href="{{ route('go', ['locId' => $doors[$i+1]]) }}">{{$doors[$i]}}</a>
                                </span>
                                    @else
                                        <strong>
                                            <span class="text-muted">{{$doors[$i]}}</span>
                                        </strong>
                                    @endif
                                @endfor
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection