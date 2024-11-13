import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";

const routes = [{ path: "/", name: "home", component: App }];

const router = createRouter({
      history: createWebHistory(),
      routes,
});

const app = createApp(App);

app.use(MotionPlugin);
app.use(createPinia());
app.use(router);

app.mount("#app");
