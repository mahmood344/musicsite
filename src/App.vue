<template>
  <v-app style="background: black;">
    <v-card  class="px-5 rounded-0" style="background: linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.85)),url('/imgs/background.jpg');background-repeat: no-repeat;background-position: center;background-size: cover;width:100%;height: 100%;">
      <Header></Header>
      <router-view></router-view>
      <v-row>
  <v-col cols="12">
      <Footer></Footer>
    </v-col>
</v-row>
    </v-card>
  </v-app>
</template>

<script setup>
import Header from './components/Header.vue';

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Footer from './components/Footer.vue';
const route = useRoute()
const crumbs = computed(() =>
  route.matched.map(r => ({
    title: r.meta.breadcrumb || r.name, 
    disabled: r.path === route.path,
    to: r.path
  }))
)
</script>


<style scoped>

</style>
