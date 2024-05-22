import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import PrimeVue from 'primevue/config';

import 'primeflex/primeflex.css';
// import 'primevue/resources/themes/aura-light-green/theme.css';
// import 'primevue/resources/themes/aura-light-noir/theme.css';
import 'primevue/resources/themes/aura-dark-noir/theme.css';

const app = createApp(App);

app.use(PrimeVue);

app.mount('#app');
