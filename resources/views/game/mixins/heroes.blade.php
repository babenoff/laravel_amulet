<div class="heroes-list">
    <hero-list location="{{ $game->loc->id }}" heroId="{{ $game->hero->id }}"></hero-list>
</div>

<template id="hero-list">
    <hero v-for="hero in heroes" v-bind:hero="hero"></hero>
</template>

<template id="hero-template">
    <div id="hero@{{hero.id}}">
        <span id="hero@{{hero.id}}-level">[@{{hero.hero_char.level}}]</span>
        <span id="hero@{{hero.id}}-name">@{{ hero.name }}</span>
    </div>
</template>