// require('./bootstrap');
import BootstrapVue from 'bootstrap-vue';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import ViewLayout from './components/ViewLayout';
import { routing } from './routing';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
const opts = {}
export default new Vuetify(opts)

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(BootstrapVue);


import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
 

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


const router = new VueRouter({
    routes: routing,
    mode: 'history',
});

const app = new Vue({
    el: '#app',
    router,
    components: {
        ViewLayout
    },
    // render: h => h(app)
});
