<template>
    <script type="text/x-template" id="item-template">
        <li>
        <div
        :class="{bold: isFolder}"
        @click="toggle"
        @dblclick="changeType">
                {{model.name}}
        <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
        </div>
        <ul v-show="open" v-if="isFolder">
                <item
                class="item"
        v-for="model in model.children"
            :model="model">
                </item>
                <li class="add" @click="addChild">+</li>
                </ul>
                </li>
    </script>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>


