<template>
  <div class="sidebar flex-box flex-column">
    <div class="logo flex-box align-center justify-center">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="menus">
      <Menu
        mode="inline"
        @click="handleClickMenu"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
      >
        <Menus v-for="item in routes" :menu="item" />
      </Menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { Menu } from "ant-design-vue";
import { routes } from "@/router/index";
import { useRouter, useRoute } from "vue-router";

import Menus from "./Menu.vue";

const route = useRoute();

const openKeys = ref(route.matched.map((i) => i.path));
const selectedKeys = ref([route.path]);

const router = useRouter();

watch(
  () => route.path,
  () => {
    selectedKeys.value = [route.path];
  }
);

const handleClickMenu = ({ key }: any) => {
  router.push(key);
};
</script>

<style scoped lang="scss">
.sidebar {
  height: 100%;
  .logo {
    height: 64px;
    img {
      width: 150px;
    }
  }
  .menus {
    flex-grow: 1;
    ::v-deep .ant-menu {
      height: 100%;
    }
  }
}
</style>
