<template>
  <div class="layout">
    <Layout>
      <LayoutSider><Sidebar /></LayoutSider>
      <Layout>
        <LayoutHeader><Header /></LayoutHeader>
        <LayoutContent>
          <div class="layout-content">
            <router-view></router-view>
          </div>
        </LayoutContent>
      </Layout>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import { Layout, LayoutSider, LayoutHeader, LayoutContent, LayoutFooter } from "ant-design-vue";
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
</script>

<style scoped lang="scss">
.layout {
  height: 100vh;
  .ant-layout {
    height: 100%;
  }
}
.code-box-demo {
  text-align: center;
}
.ant-layout-sider,
.ant-layout-header {
  background: #fff;
}
.ant-layout-sider {
  width: 300px;
}
.ant-layout-content {
  padding: 10px;
  .layout-content {
    height: 100%;
  }
}
</style>
