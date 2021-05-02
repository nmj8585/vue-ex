import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/basic",
    name: "Basic",
    component: () => import("../views/Basic.vue")
  },
  {
    path: "/databinding",
    name: "DataBinding",
    component: () => import("../views/DataBinding.vue")
  },
  {
    path: "/databindinghtml",
    name: "DataBindingHtml",
    component: () => import("../views/DataBindingHtml.vue")
  },
  {
    path: "/example",
    name: "Example",
    component: () => import("../views/Example.vue")
  },
  {
    path: "/example1",
    name: "Example",
    component: () => import("../views/Example1.vue")
  },
  {
    path: "/example2",
    name: "Example2",
    component: () => import("../views/Example2.vue")
  },
  {
    path
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
