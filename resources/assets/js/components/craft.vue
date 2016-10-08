<template>
    <div class="row">
        <div class="col-md-2">
            <craft-item v-for="item in craft" v-bind:item="item"></craft-item>
        </div>
        <div class="col-md-10 col-md-offset-2">

        </div>
    </div>
</template>