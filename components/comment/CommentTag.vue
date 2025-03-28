<template>
  <div
    class="px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow"
    :class="[
      highlight ? 'bg-pink-100 text-pink-800' : 'bg-gray-100 text-gray-800',
    ]"
  >
    <span>💬 {{ content }}</span>
    <span class="text-xs text-gray-500">— @{{ user }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: string;
  user: string;
  highlight?: boolean;
}>();
</script>
