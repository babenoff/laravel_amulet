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
                            <div class="col-md-4"></div>
                            <center class="col-md-4">
                                <table border="0" width="220" style="margin: 0 auto;">
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <center>
                                                    <div id="slot10" class="slot10">
                                                        <img src="{{asset("images/slots/slot10.png")}}" style="opacity: 0.85;" width="42" border="0">
                                                    </div>
                                                </center>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td width="45">
                                                <div id="slot1" class="slot1">
                                                    <img src="{{asset("images/slots/slot1.png")}}" style="opacity: 0.85;" width="42" border="0">
                                                </div>
                                                <div id="slot3" class="slot3">
                                                    <img src="{{asset("images/slots/slot3.png")}}" style="opacity: 0.85;" width="42" border="0">
                                                </div>
                                                <div id="slot4" class="slot4">
                                                    <img src="{{asset("images/slots/slot4.png")}}" style="opacity: 0.85;" width="42" border="0">
                                                </div>
                                                <div id="slot8" class="slot8">
                                                    <img src="{{asset("images/slots/slot8.png")}}" style="opacity: 0.85;" width="42" border="0">
                                                </div>
                                                <div id="slot6" class="slot6">
                                                    <img src="{{asset("images/slots/slot6.png")}}" style="opacity: 0.85;" width="42" border="0">
                                                </div>
                                                <div class="info-break-block"></div>
                                                <div id="slot9" class="slot9">
                                                    <img src="{{asset("images/slots/slot9.png")}}" style="opacity: 0.85;" width="42" border="0">
                                                </div>
                                                <div id="slot5" class="slot5">
                                                    <img src="{{asset("images/slots/slot5.png")}}" style="opacity: 0.85;" width="42" border="0">
                                                </div>
                                                <div id="slot7" class="slot7">
                                                    <img src="{{asset("images/slots/slot7.png")}}" style="opacity: 0.85;" width="42" border="0">
                                                </div>
                                                <div class="info-break-block"></div>
                                                <div id="slot21" class="slot21">
                                                    <img src="{{asset("images/slots/slot21.png")}}" style="opacity: 0.85;" width="42" border="0">
                                                </div>
                                            </td>
                                            <td width="130">
                                                <center>
                                                    <img src="{{asset("images/races/".$hero->hero_race."_".$hero->hero_sex.".png")}}">
                                                </center>
                                            </td>
                                            <td width="45">
                                                @for($i = 11; $i<=15; $i++)
                                                    <div id="slot{{$i}}" class="slot{{$i}}">
                                                        <img src="{{asset("images/slots/slot{$i}.png")}}" style="opacity: 0.85;" width="42" border="0">
                                                    </div>
                                                @endfor
                                                <div style="height: 20px;"></div>
                                                @for($i = 16; $i<=20; $i++)
                                                    <div id="slot{{$i}}" class="slot{{$i}}">
                                                        <img src="{{asset("images/slots/slot{$i}.png")}}" style="opacity: 0.85;" width="42" border="0">
                                                    </div>
                                                @endfor
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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