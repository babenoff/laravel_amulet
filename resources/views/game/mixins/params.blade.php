<div class="row">
    <div class="col-md-6 col-md-offset-3">
    <div class="param-bag text-muted border">
        @lang("ui.label.equip_rate")
        <span class="abvalue">0</span>
    </div>
    <div class="param-bag nopad">
        @lang("ui.label.milly_att")
        <span class="abvalue">{{ $hero->hero_stats["attack"]["boost"]["milly"] }}</span>
    </div>
    <div class="param-bag nopad">
        @lang("ui.label.middle_att")
        <span class="abvalue">{{ $hero->hero_stats["attack"]["boost"]["range"] }}</span>
    </div>
    <div class="param-bag nopad">
        @lang("ui.label.magic_boost")
        <span class="abvalue">{{ $hero->hero_stats["attack"]["boost"]["magic"] }}</span>
    </div>
    <div class="param-bag nopad">
        @lang("ui.label.heal_boost")
        <span class="abvalue">{{ $hero->hero_stats["attack"]["boost"]["magic"] }}</span>
    </div>
    <div class="param-bag nopad">
        @lang("ui.label.defence")
        <span class="abvalue">0</span>
    </div>
    <div class="param-bag nopad border">
        @lang("ui.label.resistance")
        <span class="abvalue">0</span>
    </div>
    <div class="param-bag nopad">
        @lang("ui.label.str")
        <span class="abvalue">{{ $hero->hero_stats["base"]["str"] }}</span>
    </div>
    <div class="param-bag nopad">
        @lang("ui.label.dex")
        <span class="abvalue">{{ $hero->hero_stats["base"]["dex"] }}</span>
    </div>
    <div class="param-bag nopad">
        @lang("ui.label.int")
        <span class="abvalue">{{ $hero->hero_stats["base"]["int"] }}</span>
    </div>
    <div class="param-bag nopad">
        @lang("ui.label.wid")
        <span class="abvalue">{{ $hero->hero_stats["base"]["wid"] }}</span>
    </div>
    <div class="param-bag nopad">
        @lang("ui.label.con")
        <span class="abvalue">{{ $hero->hero_stats["base"]["con"] }}</span>
    </div>
    </div>
</div>