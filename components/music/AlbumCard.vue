<template>
  <v-card class="album-card" :elevation="elevation" @click="handleClick">
    <v-img :src="album.coverUrl" :aspect-ratio="1" cover class="album-cover">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-card-title class="text-truncate">{{ album.title }}</v-card-title>
    <v-card-subtitle class="text-truncate">{{ album.artist }}</v-card-subtitle>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        icon
        :color="isLiked ? 'error' : 'default'"
        @click.stop="toggleLike"
      >
        <v-icon>{{ isLiked ? "mdi-heart" : "mdi-heart-outline" }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
interface Album {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
  releaseDate: string;
}

const props = defineProps<{
  album: Album;
  elevation?: number;
}>();

const emit = defineEmits<{
  (e: "click", album: Album): void;
  (e: "like", album: Album): void;
}>();

const isLiked = ref(false);

const handleClick = () => {
  emit("click", props.album);
};

const toggleLike = () => {
  isLiked.value = !isLiked.value;
  emit("like", props.album);
};
</script>

<style scoped>
.album-card {
  max-width: 300px;
  transition: transform 0.2s;
}

.album-card:hover {
  transform: translateY(-4px);
}

.album-cover {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
</style>
