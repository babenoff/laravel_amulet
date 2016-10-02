<div class="money" style="">
    <span class="text-muted text-capitalize">
        <strong>@lang('ui.label.money')</strong>
    </span>
    <img src="{{asset("images/items/i.gold.png")}}" /> <span class="text-muted"><strong>@money($money[0])</strong></span>
    <img src="{{asset("images/items/i.silver.png")}}" /> <span class="text-muted"><strong>@money($money[1])</strong></span>
    <img src="{{asset("images/items/i.copper.png")}}" /> <span class="text-muted"><strong>@money($money[2])</strong></span>
</div>