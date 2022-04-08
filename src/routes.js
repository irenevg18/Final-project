import Inici from "./views/Inici.vue";
import NotFound from "./views/NotFound.vue";
import Capitols from "./views/Capitols.vue";
import Comentaris from "./views/Comentaris.vue";
import Col·laboracions from "./views/Col·laboracions.vue";
import ProjectesInteres from "./views/ProjectesInteres.vue";

export const routes = [
  { path: "/", name: "inici", component: Inici },
  { path: "/:path(.*)", component: NotFound },
  { path: "/capitols", name: "capitols", component: Capitols },
  { path: "/comentaris", name: "comentaris", component: Comentaris },
  {
    path: "/col·laboracions",
    name: "col·laboracions",
    component: Col·laboracions,
  },
  {
    path: "/projectesInteres",
    name: "projectesInteres",
    component: ProjectesInteres,
  },
];
