<script setup lang="ts">
import { useRouter } from "vue-router";
import { FacebookFilled, GithubFilled, LogoutOutlined } from "@ant-design/icons-vue";

const router = useRouter();
</script>

<template >
  <div class="bg-white shadow-md">
    <div class="flex items-center justify-between container mx-auto h-14 px-4">
      <img src="@/image/Logo.png" alt="logo" class="w-10">
      <ul class="flex mb-0">
        <li class="text-blue-500 text-base font-semibold mb-0 mr-4 cursor-pointer">Home</li>
        <li class="text-base font-semibold mb-0 mr-2 cursor-pointer">Portfolio</li>
      </ul>
      <div>
        <FacebookFilled class="cursor-pointer mr-4 !text-xl" />
        <GithubFilled class="cursor-pointer mr-4 !text-xl" />
        <LogoutOutlined class="cursor-pointer !text-xl" @click="router.push({ name: 'login' })" />
      </div>
    </div>
  </div>
</template>