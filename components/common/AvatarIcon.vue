<template>
  <v-avatar
    :size="size"
    :color="color"
    :image="image"
    :class="{ 'avatar-icon': true, verified: isVerified }"
  >
    <v-img v-if="image" :src="image" :alt="alt" cover>
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <span v-else class="text-h6">{{ initials }}</span>
  </v-avatar>
</template>

<script setup lang="ts">
const props = defineProps<{
  image?: string;
  name?: string;
  size?: number;
  color?: string;
  isVerified?: boolean;
}>();

const size = computed(() => props.size || 40);
const color = computed(() => props.color || "primary");
const alt = computed(() => props.name || "User avatar");
const initials = computed(() => {
  if (!props.name) return "?";
  return props.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
});
</script>

<style scoped>
.avatar-icon {
  position: relative;
}

.verified::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  background-color: #4caf50;
  border: 2px solid white;
  border-radius: 50%;
}
</style>
