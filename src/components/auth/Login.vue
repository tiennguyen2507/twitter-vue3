
<script setup lang="ts">
import { useRouter } from "vue-router";
import { reactive } from "vue";

const router = useRouter();

type TState = {
  formData: {
    gmail: string;
    password: string;
  };
  loadding: boolean;
};

const state: TState = reactive({
  formData: {
    gmail: "",
    password: "",
  },
  loadding: false,
});

const login = () => {
  state.loadding = true;
  setTimeout(() => {
    state.loadding = false;
    router.push({ name: "home" });
  }, 5000);
};
</script>
<template>
  <div class="flex items-center h-screen">
    <div class="w-full h-full bg-sky-100 flex items-center justify-center">
      <img src="@/image/Logo.png" alt="logo" class="w-28" />
    </div>
    <div class="w-[30rem] px-8">
      <img src="@/image/Logo.png" alt="logo" class="w-12" />
      <h2 class="text-3xl mt-5">Đang diễn ra ngay bây giờ</h2>
      <h2 class="text-xl mt-5">Tham gia Twitter hôm nay</h2>
      <div class="mt-5">
        <input
          v-model="state.formData.gmail"
          class="
            outline-none
            border border-gray-300
            rounded-full
            py-2
            px-4
            w-full
            mb-6
            focus:border-2 focus:border-blue-300
          "
          placeholder="Gmail"
        />
        <input
          v-model="state.formData.password"
          type="password"
          class="
            outline-none
            border border-gray-300
            rounded-full
            py-2
            px-4
            w-full
            mb-6
            focus:border-2 focus:border-blue-300
          "
          placeholder="Password"
        />
        <a-button
          type="primary"
          shape="round"
          class="w-full text-xl"
          :loading="state.loadding"
          @click="login"
          >Tweet</a-button
        >
      </div>
    </div>
  </div>
</template>


<style>
</style>