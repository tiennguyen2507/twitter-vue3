<script setup lang="ts">
import {
  GlobalOutlined,
  PictureOutlined,
  GifOutlined,
  BarChartOutlined,
  SmileOutlined,
  ShoppingOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons-vue";
</script>
<template>
  <div class="p-4 border-b border-b-slate-100">
    <div class="flex items-center">
      <img src="@/image/avatar.png" alt="avatar" class="w-20 rounded-full mr-4" />
      <input type="text" placeholder="What's happening?" class="w-full text-3xl outline-none" />
    </div>
    <div class="flex items-center my-4 cursor-pointer">
      <GlobalOutlined class="!text-blue-400 text-xl mr-2" />
      <h2 class="font-medium text-lg text-blue-400 px-2 rounded-full hover:bg-blue-50 m-0">
        Everyone can reply
      </h2>
    </div>
    <a-divider />
    <div class="flex justify-between items-center">
      <div>
        <PictureOutlined class="!text-blue-400 text-2xl mr-4 cursor-pointer" />
        <GifOutlined class="!text-blue-400 text-2xl mr-4 cursor-pointer" />
        <BarChartOutlined class="!text-blue-400 text-2xl mr-4 cursor-pointer" />
        <SmileOutlined class="!text-blue-400 text-2xl mr-4 cursor-pointer" />
        <ShoppingOutlined class="!text-blue-400 text-2xl mr-4 cursor-pointer" />
        <EnvironmentOutlined class="!text-blue-400 text-2xl mr-4 cursor-pointer" />
      </div>
      <a-button type="primary" shape="round" class="text-xl">Tweet</a-button>
    </div>
  </div>
</template>


<style>
</style>