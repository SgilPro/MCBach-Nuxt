<template>
  <v-app>
    <Header />
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import Footer from "@/components/layout/Footer.vue";
import Header from "@/components/layout/Header.vue";
</script>
