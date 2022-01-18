import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layouts/default/index.vue";
export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    meta: {
      title: "数据看板",
      icon: "pie-chart-two-tone",
    },
    children: [
      {
        path: "/dashboard/index",
        component: () => import("@/views/dashboard.vue"),
        meta: {
          title: "数据看板",
          icon: "shop-two-tone",
        },
      },
    ],
  },
  {
    path: "/categoty",
    component: Layout,
    meta: {
      title: "壁纸分类",
      icon: "pie-chart-two-tone",
    },
    children: [
      {
        path: "/categoty/index",
        component: () => import("@/views/category/index.vue"),
        meta: {
          title: "壁纸分类",
          icon: "shop-two-tone",
        },
      },
    ],
  },
  {
    path: "/dashboard2",
    component: Layout,
    meta: {
      title: "首页",
      icon: "pie-chart-two-tone",
    },
    children: [
      {
        path: "/dashboard/about2",
        component: () => import("@/views/about.vue"),
        meta: {
          title: "关于我们",
          icon: "shop-two-tone",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
