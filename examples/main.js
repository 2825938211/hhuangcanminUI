import Vue from 'vue'
import App from './App.vue'

import 'hhuangcanmin-ui/dist/css/index.css';
import HhcmUI from 'hhuangcanmin-ui';
Vue.use(HhcmUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
