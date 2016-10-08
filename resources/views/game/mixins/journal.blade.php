{{--<div class="journal">
    @foreach($game->hero->journal as $msg)
        <div class="text-muted">
            {{ $msg }}
        </div>
    @endforeach
</div>--}}


<div class="journal">
        <journal messages="{{ $game->hero->journal }}"></journal>
</div>

<template id="hero-journal">
        <journal-message v-for="message in messages" v-bind:msg="message"></journal-message>
</template>

