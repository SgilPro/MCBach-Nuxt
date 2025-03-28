<script setup lang="ts">
import AvatarIcon from "~/components/common/AvatarIcon.vue";

interface MenuItem {
  title: string;
  icon: string;
  action: string;
}

const emit = defineEmits<{
  (e: "toggle-drawer"): void;
  (e: "menu-action", action: string): void;
}>();

// 模擬用戶數據
const userAvatar = ref("https://picsum.photos/200");
const userName = ref("John Doe");
const isVerified = ref(true);

const menuItems = [
  { title: "Profile", icon: "mdi-account", action: "profile" },
  { title: "Settings", icon: "mdi-cog", action: "settings" },
  { title: "Logout", icon: "mdi-logout", action: "logout" },
];

const toggleDrawer = () => {
  emit("toggle-drawer");
};

const handleMenuClick = (item: MenuItem) => {
  emit("menu-action", item.action);
};
</script>

<template>
  <v-app-bar color="primary" class="header-bar">
    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

    <v-app-bar-title class="text-h6"> MC Bach </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon class="mr-2">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon class="mr-2">
      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <AvatarIcon
            :image="userAvatar"
            :name="userName"
            :is-verified="isVerified"
          />
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :value="item"
          :prepend-icon="item.icon"
          :title="item.title"
          @click="handleMenuClick(item)"
        ></v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<style scoped>
.header-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>
