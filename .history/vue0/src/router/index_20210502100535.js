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
    path: "/example3",
    name: "Example3",
    component: () => import("../views/Example3.vue")
  },
  {
    path: "/example4",
    name: "Example4",
    component: () => import("../views/Example4.vue")
  },
  {
    path: "/example5",
    name: "Example5",
    component: () => import("../views/Example5.vue")
  },
  {
    path: "/example6",
    name: "Example6",
    component: () => import("../views/Example6.vue")
  },
  {
    path: "/example7",
    name: "Example7",
    component: () => import("../views/Example7.vue")
  },
  {
    path: "/example8",
    name: "Example8",
    component: () => import("../views/Example8.vue")
  },
  {
    path: "/example9-0",
    name: "Example9-0",
    component: () => import("../views/Example9-0.vue")
  },
  {
    path: "/example9-1",
    name: "Example9-1",
    component: () => import("../views/Example9-1.vue")
  },
  {
    path: "/example10",
    name: "Example10",
    component: () => import("../views/Example10.vue")
  },
  {
    path: "/example11",
    name: "Example11",
    component: () => import("../views/Example11.vue")
  },
  {
    path: "/example12",
    name: "Example12",
    component: () => import("../views/Example12.vue")
  },
  {
    path: "/example13",
    name: "Example13",
    component: () => import("../views/Example13.vue")
  },
  {
    path: "/slot",
    name: "SlotModalLayiut;",
    component: () => import("../views/Example13.vue")
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
