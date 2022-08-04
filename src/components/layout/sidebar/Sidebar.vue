<script setup lang="ts">
// import { HomeOutlined } from "@ant-design/icons-vue";
import { dataSidebar } from "@/router/route.config.js";
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";

const router = useRouter();

const routerPath = computed(() => router.currentRoute.value.path);
</script>

<template>
  <div class="w-20 lg:w-72 h-screen py-2">
    <router-link v-for="({ name, icon, path }, index) in dataSidebar" :key="index" :to="path">
      <div
        class="
          h-14
          flex
          items-center
          justify-center
          cursor-pointer
          p-3
          m-2
          rounded-full
          hover:bg-gray-200
          lg:justify-start
        "
      >
        <component :is="icon" class="text-xl lg:mr-4"></component>
        <h2
          class="hidden lg:block mb-0 text-xl font-normal"
          :class="{ active: routerPath === path }"
        >
          {{ name }}
        </h2>
      </div>
    </router-link>
    <div class="p-4">
      <a-button type="primary" shape="round" class="w-full text-xl">Tweet</a-button>
    </div>
  </div>
</template>
<style scoped>
.active {
  /* background-color: rgb(236, 235, 235); */
  font-weight: 700;
}
</style>