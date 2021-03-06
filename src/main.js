import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faCoins, faWeightHanging } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faClipboard, faGithub, faVuejs, faCoins, faWeightHanging)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
 