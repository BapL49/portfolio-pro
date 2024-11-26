import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createWebHistory, createRouter } from "vue-router";
import { MotionPlugin } from "@vueuse/motion";
import App from "./App.vue";
import LandingPage from "./components/landingPageComponents/LandingPage.vue";

const routes = [
      { path: "/", name: "home", component: LandingPage },
      { path: "/projects", name: "projets", component: App },
      { path: "/contact", name: "contact", component: App },
];

const router = createRouter({
      history: createWebHistory(),
      routes,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(MotionPlugin);

app.mount("#app");
