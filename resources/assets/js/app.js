/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

Vue.component('journal-message', {
    props: ['msg'],
    template: '<div class="text-muted">{{ msg.msg }}</div>'
});

Vue.component('journal', {
    template: "#hero-journal",
    props: ['messages'],
    created: function () {
        this.messages = JSON.parse(this.messages);
    },
    methods: {
        clear: function(){
            this.messages = [];
            $('#clearJournal').hide()
            console.log(this.messages)
        }
    }
});
Vue.component('hero', {
    template: '#hero-template',
    props: ['hero']
});
Vue.component('hero-list', {
    template: "#hero-list",
    props: ['location', 'heroes', 'hId'],
    created: function () {
        var hl = this;
        this.$http.get('api/heroes/' + this.location + "?_token=" + window.Likedimion.csrfToken).then(
            function (data) {
                //console.log(data.body);
                hl.heroes = JSON.parse(data.body);
            }, function (data) {
                console.log(data.statusText);
            }
        );
    },

    data: function() {
        return {
            heroes: []
        }
    }
});



const journal = new Vue({
    el: '.journal'
});
const heroes = new Vue({
    el: '.heroes-list'
});
