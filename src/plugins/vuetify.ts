// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css"; // CSS 없으면 아이콘이 보이지 않음

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "myCustomTheme",
    themes: {
      myCustomTheme: {
        dark: false,
        colors: {
          background: "#f5e8c7",
          surface: "#ecccb2",
          primary: "#deb6ab", // card 배경화면
          secondary: "#03DAC6",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          orange: "#FB8C00",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
