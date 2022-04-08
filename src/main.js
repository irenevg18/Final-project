import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
// import Vue from "vue";
// import Embed from "v-video-embed";

import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");
// Vue.use(Embed);
