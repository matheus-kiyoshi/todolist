import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { BiGithub } from "oh-vue-icons/icons";
import { OhVueIcon, addIcons } from "oh-vue-icons";

addIcons(BiGithub);

createApp(App)
  .use(store)
  .component("v-icon", OhVueIcon)
  .mount('#app')
