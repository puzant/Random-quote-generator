import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueSweetalert2 from 'vue-sweetalert2';

import VueClipboard from 'vue-clipboard2'
import 'sweetalert2/dist/sweetalert2.min.css';


VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);
library.add(faUserSecret);
Vue.use(VueSweetalert2);

 
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
