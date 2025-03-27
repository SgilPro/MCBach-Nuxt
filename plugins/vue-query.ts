import { VueQueryPlugin } from "@tanstack/vue-query";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(VueQueryPlugin, {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          staleTime: 5 * 60 * 1000, // 5 minutes
          refetchOnWindowFocus: false,
        },
      },
    },
  });
});
