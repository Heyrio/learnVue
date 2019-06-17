new Vue({
    el: "#app",
    data: {
        name: 'hello world',
        website: 'https://www.google.com',
        markup: "<h4>Soup guies</h4>"
    },

    methods: {
        greet: function(time){
            return 'Good Morning'  + time;
        }
    }
});