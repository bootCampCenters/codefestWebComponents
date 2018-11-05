import Vue from 'vue'
import App from './App.vue'

import { defineCustomElements as defineMyComponent } from '@marcosginel/my-component/dist/loader';

defineMyComponent(window);

Vue.config.productionTip = false

Vue.config.ignoredElements = [
  'my-component'
];

new Vue({
  render: h => h(App)
}).$mount('#app')
