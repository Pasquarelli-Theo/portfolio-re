import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";
import SkyView from "../views/SkyView.vue";
import ProjetsView from "../views/ProjetsView.vue";
import PetitCorsaireView from "../views/PetitCorsaireView.vue";
import OsakaView from "../views/OsakaView.vue";
import bpmView from "../views/bpmView.vue";
import illustrationView from "../views/illustrationView.vue";
import graphismeView from "../views/graphismeView.vue";
import designView from "../views/designView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/contact", name: "contact", component: ContactView },
    { path: "/about", name: "about", component: AboutView },
    { path: "/skywalker", name: "skywalker", component: SkyView },
    { path: "/projets", name: "projets", component: ProjetsView },
    { path: "/petitcorsaire", name: "petitcorsaire", component: PetitCorsaireView },
    { path: "/osaka2025", name: "osaka2025", component: OsakaView },
    { path: "/13bpm", name: "13bpm", component: bpmView },
    { path: "/illustration", name: "illustration", component: illustrationView },
    { path: "/graphisme", name: "graphisme", component: graphismeView },
    { path: "/design", name: "design", component: designView },
  ],
});

export default router;

