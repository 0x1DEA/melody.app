import axios from "axios";

import { createApp } from "vue";
import { createPinia } from "pinia";

import piniaPluginPersistedState from "pinia-plugin-persistedstate";

import App from "@/App.vue";

import router from "@/router";

const ID = "#app";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://melodykit.app/api/v1";

const pinia = createPinia();

pinia.use(piniaPluginPersistedState);

const app = createApp(App);

app.use(router);

app.use(pinia);

app.mount(ID);
