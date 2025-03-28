import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "dark",
      themes: {
        dark: {
          colors: {
            primary: "#d10a5c", // Tailwind primary-500
            secondary: "#b6d99d", // Tailwind secondary-500
            background: "#111111", // Tailwind neutral-900
            surface: "#111111", // Tailwind neutral-900
            onPrimary: "#ffffff", // 按鈕文字
            onBackground: "#ffffff", // Tailwind neutral-100
          },
        },
      },
    },
  });

  app.vueApp.use(vuetify);
});
