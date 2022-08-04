<template>
  <div class="w-96 bg-slate-50 rounded-xl box-border">
    <h3 class="text-xl my-1 p-4">Trends for you</h3>
    <div>
      <div class="flex justify-between items-center p-4 hover:bg-gray-100">
        <div class="">
          <p class="text-gray-500 m-0">Trending in VietNam</p>
          <h3 class="m-0">#XIN_CHAO_VIET_NAM</h3>
          <p class="text-gray-500 m-0">38.8K Tweets</p>
        </div>
        <MoreOutlined class="p-2 rounded-full hover:bg-gray-200 text-xl rotate-90 cursor-pointer" />
      </div>
    </div>
    <h2 class="p-4 text-blue-400 cursor-pointer">Show more</h2>
  </div>
</template>

<script setup lang="ts">
import { MoreOutlined } from "@ant-design/icons-vue";
</script>

<style>
</style>