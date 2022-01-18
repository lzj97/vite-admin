<template>
  <SubMenu v-if="hasChild" :key="finalMenu.path + ''">
    <template #icon> </template>
    <template #title>{{ finalMenu.meta?.title }}</template>
    <Menu v-for="item in finalMenu.children" :menu="item" />
  </SubMenu>
  <MenuItem v-else :key="finalMenu.path">{{ finalMenu.meta?.title }}</MenuItem>
</template>

<script setup lang="ts">
import { MenuItem, SubMenu } from "ant-design-vue";
import { RouteRecordRaw } from "vue-router";
import { computed } from "vue";

const { menu } = defineProps<{
  menu: RouteRecordRaw;
}>();

const hasChild = computed(() => {
  if (!menu?.children) return false;
  if (menu.children.length === 1) {
    const m = menu.children[0];
    if (m.path.endsWith("/index")) return false;
  }
  return true;
});
const finalMenu = computed(() => {
  if (menu?.children && menu.children.length === 1 && !hasChild.value) {
    return menu.children[0];
  }
  return menu;
});
</script>

<style scoped lang="scss"></style>
