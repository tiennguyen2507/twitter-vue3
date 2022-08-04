<template>
  <div class="w-96 bg-slate-50 rounded-xl box-border">
    <h3 class="text-xl my-1 p-4">Who to follow</h3>
    <div>
      <div class="flex justify-between items-center p-4 hover:bg-gray-100">
        <div class="flex items-center">
          <!-- <a-avatar size="large" alt="avatar" src="@/image/avatar.png" srcset="@/image/avatar.png"/> -->
          <img src="@/image/avatar.png" alt="avatar" class="w-10 rounded-full">
          <div class="ml-2">
            <h3 class="m-0">Nguyễn Lê Đình Tiên</h3>
            <p class="text-gray-500 m-0">@tiennguyen2507</p>
          </div>
        </div>
        <a-button shape="round" class="!bg-black !text-white">Follow</a-button>
      </div>
    </div>
    <h2 class="p-4 text-blue-400 cursor-pointer">Show more</h2>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
</style>