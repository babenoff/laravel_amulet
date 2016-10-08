/**
 * Created by maksim on 08.10.16.
 */

require('./bootstrap');

Vue.component('craft-item', {
    template: "#craft-item-template",
    props: ['craft'],
    methods: {
        test: function(){
            console.log(this.craft);
        }
    }
});

Vue.component('craft', {
    template: "#craft-template",
    props: ['crafts'],
    created: function () {
        //var that = this;
        this.crafts = JSON.parse(this.crafts);
    }
});

const craft = new Vue({
    el: ".craft"
});