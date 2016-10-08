@extends('layouts.game')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <strong class="text-capitalize">@lang('ui.label.craft')</strong>
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
                        <div class="craft">
                            <craft crafts="{{ $craft }}"></craft>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <template id="craft-template">
        <div class="row">
            <div class="col-md-2">
                <craft-item v-for="craft in crafts" v-bind:craft="craft"></craft-item>
            </div>
            <div class="col-md-10 col-md-offset-2">

            </div>
        </div>
    </template>
    <template id="craft-item-template">
        <div class="row" v-on:click="test">
            <span class="text-muted">
                @{{ craft }}
            </span>
        </div>
    </template>
@endsection

@section('scripts')
    <script type="text/javascript" src="/js/craft.js"></script>
    <script type="text/javascript">
        $(function () {
            $('#craftLink').addClass('active');
        });
    </script>
@endsection