import axios from "axios";

import { createApp } from "vue";

import cookies from "vue-cookies";

import App from "./App.vue";

import router from "./router";

import store from "./store";

const ID = "#app";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://melodykit.app/api/v1";

const app = createApp(App);

app.use(cookies);

app.use(router);

app.use(store);

app.mount(ID);
