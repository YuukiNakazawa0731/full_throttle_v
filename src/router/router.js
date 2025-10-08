import { createRouter, createWebHistory } from "vue-router";
import Loading from "../components/features/global/Loading.vue";
import About from "../components/features/pages/About.vue";

// ルート定義
// GitHub Pages で base:'/full_throttle_v/' の場合でもアプリ内部の論理パスは '/' として扱う
// createWebHistory に import.meta.env.BASE_URL を渡すことで
// 実際の URL '/full_throttle_v/' → ルーター内部では '/' と解決され警告を防ぐ
const routes = [
  { path: "/", component: About },
  { path: "/loading", component: Loading },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

if (
  import.meta.env.BASE_URL !== "/" &&
  import.meta.env.BASE_URL !== undefined
) {
  const cleaned = import.meta.env.BASE_URL.replace(/\/+/g, "/").replace(
    /(^\/|\/$)/g,
    ""
  );
  if (cleaned) {
    const fullBasePath = `/${cleaned}/`;
    // 既に同一パスがない場合のみ追加
    if (!routes.find((r) => r.path === fullBasePath)) {
      router.addRoute({ path: fullBasePath, redirect: "/" });
    }
  }
}

export default router;
