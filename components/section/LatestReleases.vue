<template>
  <section class="py-6">
    <div class="flex items-center gap-2 mb-4">
      <h2 class="text-2xl font-bold">最新發行</h2>
      <span class="text-sm text-white bg-green-500 px-2 py-0.5 rounded-full"
        >NEW</span
      >
    </div>

    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <AlbumCard
        v-for="(album, index) in albums"
        :key="index"
        :album="{
          id: index,
          title: album.title,
          artist: album.author,
          coverUrl: `https://picsum.photos/seed/${index}/200`,
          releaseDate: new Date().toISOString(),
        }"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import AlbumCard from "@/components/music/AlbumCard.vue";

const albums = [
  { title: "喇嘛的洗衣機", author: "肥湯姆", color: "bg-yellow-100" },
  { title: "走到啡", author: "歐記", color: "bg-green-100" },
  { title: "SOFA KING", author: "有廖", color: "bg-purple-100" },
];
</script>
