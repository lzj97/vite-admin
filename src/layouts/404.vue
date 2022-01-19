<template>
  <div>
    <Result status="404" title="404" sub-title="页面不存在。">
      <template #extra>
        <Button type="primary"> <router-link to="/">返回首页</router-link> </Button>
      </template>
    </Result>
  </div>
</template>

<script setup lang="ts">
import { Result, Button } from "ant-design-vue";
</script>

<style scoped lang="scss"></style>
