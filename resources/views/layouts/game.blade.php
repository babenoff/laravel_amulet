<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Likedimion') }}</title>

    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js" type="text/javascript"></script>
    <![endif]-->
    <!-- Scripts -->
    <script>
        window.Likedimion = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
</head>
<body>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">

                <!-- Collapsed Hamburger -->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <!-- Branding Image -->
                <a class="navbar-brand text-capitalize" href="{{ url('/') }}">
                    @lang('ui.label.travel')
                </a>
            </div>

            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <!-- Left Side Of Navbar -->
                <ul class="nav navbar-nav">
                    <li id="heroLink"><a class="text-capitalize" href="{{ route('hero') }}"><strong>@lang('ui.label.hero')</strong></a></li>
                    <li id="invLink"><a class="text-capitalize" href="{{ route('inventory') }}"><strong>@lang('ui.label.inventory')</strong></a></li>
                    <li id="skillsLink"><a class="text-capitalize" href="{{ route('skills') }}"><strong>@lang('ui.label.skills')</strong></a></li>
                    <li id="craftLink"><a class="text-capitalize" href="{{ route('craft') }}"><strong>@lang('ui.label.craft')</strong></a></li>
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="nav navbar-nav navbar-right">
                    <!-- Authentication Links -->
                    @if (Auth::guest())
                        <li><a href="{{ url('/login') }}">Вход</a></li>
                        <li><a href="{{ url('/register') }}">Регистрация</a></li>
                    @else
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                {{ $game->hero->name }} <span class="caret"></span>
                            </a>

                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <a class="btn btn-link btn-danger" href="{{ route('game-settings') }}">
                                        {{ trans('ui.label.settings') }}
                                    </a>
                                </li>
                                <li>
                                    <a class="btn btn-link btn-danger" href="{{ route('disconnect') }}">
                                        {{ trans('ui.label.logout') }}
                                    </a>
                                </li>
                            </ul>
                        </li>
                    @endif
                </ul>
            </div>
        </div>
    </nav>

    @yield('content')

    <!-- Scripts -->

    @yield('scripts')
</body>
</html>
