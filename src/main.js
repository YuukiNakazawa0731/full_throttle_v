import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import "@/styles/global/Common.css";
import "@/styles/global/Header.css";
import "@/styles/global/Footer.css";

import "@/styles/pages/TitlePage.css";
import "@/styles/pages/About.css";
import "@/styles/pages/Profile.css";
import "@/styles/pages/Skill.css";
import "@/styles/pages/Works.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
