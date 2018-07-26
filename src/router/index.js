import Vue from "vue";
import Router from "vue-router";
import Pos from "@/components/page/Pos";
import Home from "@/components/page/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "Pos",
      component: Pos
    },
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
});
