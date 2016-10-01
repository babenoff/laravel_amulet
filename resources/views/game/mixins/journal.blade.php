<div class="journal">
    @foreach($game->hero->journal as $msg)
        <div class="text-muted">
            {{ $msg }}
        </div>
    @endforeach
</div>