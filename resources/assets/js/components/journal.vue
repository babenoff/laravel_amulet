<template id="journal-template">
        <journal-message v-for="message in messages" v-bind:msg="message"></journal-message>
</template>
