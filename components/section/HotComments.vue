<template>
  <section class="py-6">
    <h2 class="text-2xl font-bold mb-4">熱門評論</h2>

    <div class="flex flex-wrap gap-3">
      <CommentTag
        v-for="(comment, i) in comments"
        :key="i"
        :content="comment.content"
        :user="comment.user"
        :highlight="comment.highlight"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import CommentTag from "@/components/comment/CommentTag.vue";

const comments = [
  {
    content: "這首歌根本天堂！🎧",
    user: "BachFan77",
    highlight: true,
  },
  {
    content: "副歌洗腦到不行哈哈",
    user: "melody_mel",
    highlight: false,
  },
  {
    content: "這張專輯封面也太讚了吧！",
    user: "lofi.lofi",
    highlight: false,
  },
];
</script>
