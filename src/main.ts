import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createWebHistory, createRouter } from "vue-router";
import { MotionPlugin } from "@vueuse/motion";
import App from "./App.vue";
import LandingPage from "./components/landingPageComponents/LandingPage.vue";
import ProjectsComponent from "./components/projectsComponents/ProjectsComponent.vue";
import ProjectSublimis from "./components/projects/ProjectSublimis.vue";

const routes = [
      { path: "/", name: "home", component: LandingPage },
      { path: "/projects", name: "projets", component: ProjectsComponent },
      { path: "/projects/sublimis", name: "sublimis", component: ProjectSublimis },
];

const router = createRouter({
      history: createWebHistory(),
      routes,
      scrollBehavior(to) {
            if (to.hash) {
                  return { el: to.hash };
            }
      },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(MotionPlugin);

app.mount("#app");
