<template>
  <div class="header flex-box justify-between">
    <div></div>
    <div class="flex-box align-center">
      <!-- <Avatar
        shape="circle"
        size="small"
        :style="{ backgroundColor: '#f56a00', verticalAlign: 'middle' }"
      >
        陆
      </Avatar>
      陆小明 -->

      <Dropdown placement="bottomRight">
        <span class="flex-box align-center">
          <Avatar
            size="small"
            src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
            class="antd-pro-global-header-index-avatar"
          />
          <span class="ml-sm">张三封</span>
        </span>
        <template v-slot:overlay>
          <Menu class="ant-pro-drop-down" style="min-width: 140px" :selected-keys="[]">
            <MenuItem key="center">
              <GithubOutlined />
              个人设置
            </MenuItem>
            <MenuItem key="settings">
              <GithubOutlined />
              个人中心
            </MenuItem>
            <MenuDivider />
            <MenuItem key="logout">
              <GithubOutlined />
              退出登录
            </MenuItem>
          </Menu>
        </template>
      </Dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Avatar, Dropdown, Menu, MenuItem, MenuDivider } from "ant-design-vue";
import { GithubOutlined } from "@ant-design/icons-vue";
</script>

<style scoped lang="scss">
.header {
  display: flex;
}
</style>
