<script setup lang="ts">
import TrendContent from "@/components/common/TrendContent.vue";
import FollowContent from "@/components/common/followContent/FollowContent.vue";
import CreatePort from '@/views/homePage/CreatePost/CreatePost.vue'
</script>
<template>
  <div class="flex justify-between">
    <div class="w-full h-screen border-x border-x-gray-100">
      <CreatePort />
    </div>
    <div class="hidden lg:block m-4">
      <TrendContent />
      <FollowContent class="mt-4" />
    </div>
  </div>
</template>


<style>
</style>