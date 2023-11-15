import { createWebHistory, createRouter } from "vue-router";
import axios from 'axios'

const routes = []

const router = createRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("logado") == undefined) {
    axios.get(`https://serhiy-web-app-windows.azurewebsites.net/.auth/me`).then(res => {
      var token = res.data[0].access_token
      localStorage.setItem("token", token)
      window.store.commit('token', token)
    })
  }
  next();
});

export default router;
