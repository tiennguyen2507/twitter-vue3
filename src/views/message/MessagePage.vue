<script lang="ts" setup>
  import { MoreOutlined } from "@ant-design/icons-vue";
  import { Button, Input, Tag } from "ant-design-vue";
  import useSocketIO from "@/hook/useSoketIO";
  import { onMounted, reactive } from "vue";
  import {
    PictureOutlined,
    GifOutlined,
    SmileOutlined,
    SendOutlined,
    InfoCircleOutlined,
  } from "@ant-design/icons-vue";
  const { socket } = useSocketIO();

  type TUser = {
    userId?: string;
    userName?: string;
    message?: any[];
  };

  type TState = {
    formLogin: {
      userName: string;
    };
    userName: string;
    listUser: TUser[];
    userSelect: TUser;
    formMessage: string;
  };

  const state: TState = reactive({
    formLogin: {
      userName: "",
    },
    userName: "",
    listUser: [],
    userSelect: {},
    formMessage: "",
  });

  const login = () => {
    socket.connect();
    socket.auth = { userName: state.formLogin.userName };

    state.userName = state.formLogin.userName;
    state.formLogin.userName = "";
  };

  const selectUser = (user: any) => {
    state.userSelect = user;
  };

  const sendMessagePrivite = () => {
    const data = {
      user: state.userSelect,
      message: state.formMessage,
    };
    state.listUser.forEach((user) => {
      if (user.userId === state.userSelect.userId) {
        user.message?.push({
          auth: "me",
          message: state.formMessage,
        });
      }
    });
    socket.emit("privateMessage", data);
  };

  onMounted(() => {
    socket.on("getUserList", (soket) => {
      state.listUser = soket;
    });

    socket.on("jornUserList", (data) => {
      state.listUser.push({
        ...data,
        message: [],
      });
    });
    socket.on("privateMessageToReceiver", (data) => {
      state.listUser.forEach((user) => {
        if (user.userId === data.from) {
          user.message?.push(data);
        }
      });
    });
  });
</script>
<template>
  <div class="flex items-center justify-between">
    <div class="w-96 flex items-center p-7 justify-between">
      <Input v-model:value="state.formLogin.userName" />
      <Button type="primary" class="ml-5" :disabled="!state.formLogin.userName" @click="login"
        >Login</Button
      >
    </div>
    <Tag color="cyan">name: {{ state.userName }} </Tag>
  </div>
  <div class="border-r border-r-gray-100 flex">
    <div class="w-96 border-x border-x-gray-100 h-screen">
      <div
        v-for="value in state.listUser"
        :key="value.userId"
        class="h-16 hover:bg-gray-50 mt-1 p-5 flex justify-between items-center cursor-pointer"
        @click="selectUser(value)"
      >
        <div class="flex items-center">
          <img src="@/image/avatar.png" alt="avatar" class="w-10 rounded-full mr-4" />
          <h2 class="!m-0">{{ value.userName }}</h2>
        </div>
        <MoreOutlined class="p-2 rounded-full hover:bg-gray-200 text-xl rotate-90 cursor-pointer" />
      </div>
    </div>
    <div class="w-full">
      <div class="h-screen flex flex-col justify-between pb-48">
        <div
          class="flex justify-between items-center p-4 hover:bg-gray-100"
          v-if="state.userSelect.userName"
        >
          <div class="flex items-center">
            <img src="@/image/avatar.png" alt="avatar" class="w-10 rounded-full" />
            <div class="ml-2">
              <h3 class="m-0">{{ state.userSelect.userName }}</h3>
              <p class="text-gray-500 m-0">@admin</p>
            </div>
          </div>
          <InfoCircleOutlined
            class="p-2 rounded-full hover:bg-gray-200 text-xl cursor-pointer !text-blue-400"
          />
        </div>
        <div class="h-full">
          <div v-for="(value, index) in state.userSelect.message" :key="index">
            <div v-if="value.auth" class="flex justify-end mr-2">
              <span class="bg-blue-400 rounded-full text-white text-xl m-1 px-3 py-1">{{ value.message }}</span>
            </div>

            <div v-else class="flex justify-start ml-2">
              <span class="bg-gray-300 rounded-full text-white text-xl m-1 px-3 py-1">{{ value.message }}</span>
            </div>
          </div>
        </div>
        <div class="h-11 border border-x-gray-200 flex items-center py-7 px-4">
          <PictureOutlined class="!text-blue-400 text-xl mr-4 cursor-pointer" />
          <GifOutlined class="!text-blue-400 text-xl mr-4 cursor-pointer" />
          <div
            class="flex items-center justify-between p-2 px-4 border-2 border-blue-400 rounded-full w-full mr-3"
          >
            <input
              type="text"
              placeholder="Start a new message"
              class="outline-none flex w-full"
              v-model="state.formMessage"
            />
            <SmileOutlined class="!text-blue-400 text-xl cursor-pointer" />
          </div>
          <SendOutlined class="!text-blue-400 text-xl cursor-pointer" @click="sendMessagePrivite" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
