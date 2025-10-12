<template>
  <footer
    class="mx-auto py-4 text-white fixed-footer"
    style="max-width: 300px"
  >
    <v-row class="d-flex justify-center align-center">
      <v-col cols="3">
        <v-card
          style="width: 35px; background: #404040;"
          class="d-flex justify-center align-center pa-1 text-white rounded-xl"
        >
          <v-icon>mdi-instagram</v-icon>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
          style="width: 35px; background: #404040;"
          class="d-flex justify-center align-center pa-1 text-white rounded-xl"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
          style="width: 35px; background: #404040;"
          class="d-flex justify-center align-center pa-1 text-white rounded-xl"
        >
          <v-icon>mdi-spotify</v-icon>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
          style="width: 35px; background: #404040;"
          class="d-flex justify-center align-center pa-1 text-white rounded-xl"
        >
          <v-icon>mdi-youtube</v-icon>
        </v-card>
      </v-col>
    </v-row>
  </footer>
</template>

<style scoped>
.fixed-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: transparent; /* می‌تونی مثلاً #000 یا #111 بزاری */
  z-index: 100;
}
</style>