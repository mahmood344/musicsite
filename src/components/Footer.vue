<template>
  <footer
    class="mx-auto text-white"
  :class="[
    $router.currentRoute.value.name === 'Home' ? 'fixed-footer' : 'py-8',
    $router.currentRoute.value.name === 'Albums' ? 'd-none' : ''
  ]"
  style="max-width: 300px;"
  >
    <v-row class="d-flex justify-center align-center">
      <v-col cols="3">
        <v-card
        href="https://www.instagram.com/ehsanneyzan/?hl=en"
          style="width: 35px; background: #404040;"
          class="d-flex justify-center align-center pa-1 text-white rounded-xl"
        >
          <v-icon>mdi-instagram</v-icon>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
        disabled
          style="width: 35px; background: #404040;"
          class="d-flex justify-center align-center pa-1 text-white rounded-xl"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
        disabled
          style="width: 35px; background: #404040;"
          class="d-flex justify-center align-center pa-1 text-white rounded-xl"
        >
          <v-icon>mdi-spotify</v-icon>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
        href="https://www.youtube.com/channel/UCKliH3kY-UALFhse6SHFtqw"
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
  bottom:15px;
  left: 0;
  right: 0; 
   background: transparent;
  z-index: 10; 
}
</style>