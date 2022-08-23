import {
    HomeOutlined,
    BorderlessTableOutlined,
    BellOutlined,
    ManOutlined,
    BookOutlined,
    UserOutlined,
    HolderOutlined
  } from "@ant-design/icons-vue";
  
  export const dataSidebar = [
    {
      name: "home",
      icon: HomeOutlined,
      path:'/home',
      component: () => import('@/views/homePage/HomePage.vue')
    },
    {
      name: "Explore",
      icon: BorderlessTableOutlined,
      path:'/explore',
      component: () => import('@/views/explorePage/ExplorePage.vue')
    },
    {
      name: "Notifications",
      icon: BellOutlined,
      path:'/notifications',
      component: () => import('@/views/homePage/HomePage.vue')
    },
    {
      name: "messages",
      icon: ManOutlined,
      path:'/messages',
      component: () => import('@/views/message/MessagePage.vue')
    },
    {
      name: "Bookmarks",
      icon: BookOutlined,
      path:'/bookmarks',
      component: () => import('@/views/homePage/HomePage.vue')
    },
    {
      name: "Profile",
      icon: UserOutlined,
      path:'/profile',
      component: () => import('@/views/homePage/HomePage.vue')
    },
    {
      name: "More",
      icon: HolderOutlined,
      path:'/more',
      component: () => import('@/views/homePage/HomePage.vue')
    },
  ];
  