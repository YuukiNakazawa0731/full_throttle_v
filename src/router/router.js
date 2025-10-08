import { createRouter, createWebHistory } from "vue-router";
import Loading from "../components/features/global/Loading.vue";
import Header from "../components/features/global/Header.vue";
import Footer from "../components/features/global/Footer.vue";
// HomePageのimportを追加（例: Aboutページをトップにする場合）
import About from "../components/features/pages/About.vue";

const routes = [
  { path: "/", component: About },
  { path: "/loading", component: Loading }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
