@extends('layouts.game')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <strong class="text-capitalize">@lang('ui.label.skills')</strong>
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

@section('scripts')
    <script src="/js/app.js"></script>
    <script type="text/javascript">
        $(function () {
            $('#skillsLink').addClass('active');
        });
    </script>
@endsection