import './assets/main.css'

import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './components/App.vue';

library.add(fas);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')