<template>
  <v-app>
    <v-card class="w-100 h-100 px-5" style="background: linear-gradient(rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.9)),url('/imgs/background.jpg');background-repeat: no-repeat;background-position: center;background-size: cover;">
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
    </v-card>
    <!-- <section class="w-100 h-100" style="background: linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.8));">
      <div class="mx-auto" style="width: 90%; max-width: 1900px;">
        
         <v-divider :thickness="4"></v-divider>
          <v-breadcrumbs :items="crumbs" class="text-white">
    <template v-slot:divider>
      <v-icon color="white">mdi-chevron-right</v-icon>
    </template>

    <template v-slot:item="{ item }">
      <RouterLink
        v-if="!item.disabled"
        :to="item.to"
        class="text-white text-decoration-none"
      >
        {{ item.title }}
      </RouterLink>
      <span v-else class="font-weight-bold">{{ item.title }}</span>
    </template>
  </v-breadcrumbs>
        
      </div>
    </section> -->
  </v-app>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

// ساخت آیتم‌های breadcrumb از meta
const crumbs = computed(() =>
  route.matched.map(r => ({
    title: r.meta.breadcrumb || r.name, // 👈 اولویت با meta.breadcrumb
    disabled: r.path === route.path,
    to: r.path
  }))
)
</script>


<style scoped>

</style>
