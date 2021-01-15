//import bootstrap globally
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'  

require('./bootstrap');

window.Vue = require('vue');

import App from './App.vue';

new Vue({
    el: '#app',
    components: {
        App
    }
});