import Vue from "vue";
import Router from "vue-router";
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import (/* webpackChunkName: "service" */
      "./views/Home.vue")
    }, {
      path: "/service",
      name: "service",
      // route level code-splitting this generates a separate chunk (about.[hash].js)
      // for this route which is lazy-loaded when the route is visited.
      component: () => import (/* webpackChunkName: "service" */
      "./views/Service.vue")
    }, {
      path: "/contact",
      name: "contact",
      component: () => import (/* webpackChunkName: "contact" */
      "./views/Contact.vue")
    }, {
      path: "/building/:id",
      name: "building",
      component: () => import (/* webpackChunkName: "building" */
      "./views/Building.vue")
    }, {
      path: "*",
      name: "notfound",
      component: NotFound
    }
  ]
});

router.afterEach((to, from) => {
  const el = document.getElementById('app');
  el.scrollIntoView({block: 'start', behavior: 'smooth'});
})

export default router;
