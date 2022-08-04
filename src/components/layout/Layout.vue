<script setup lang="ts">
import Header from "../common/Header.vue";
import Sidebar from "./sidebar/Sidebar.vue";
</script>

<template>
  <Header />
  <div class="container mx-auto flex">
    <Sidebar />
    <div class="w-full">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
</style>