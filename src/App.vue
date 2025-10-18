<template>
  <v-app style="background: black;">
    <v-card  class="px-5 rounded-0 responsive-card"
  style="
    background: linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.85)),
                url('/imgs/background.jpg') no-repeat center center;
    background-size: cover;
    width: 100%;
    min-height: 100vh; /* حداقل ارتفاع صفحه */
    overflow: auto; /* اجازه اسکرول وقتی محتوا بیشتر شد */
  ">
      <Header></Header>
      <router-view></router-view>
      <v-row>
      <Footer></Footer>
</v-row>
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

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Footer from './components/Footer.vue';
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
.responsive-card {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* برای صفحات خیلی کوچک، می‌تونید ارتفاع رو کمتر کنید */
@media (max-width: 768px) {
  .responsive-card {
    height: 60vh; /* یا هر عدد دلخواه */
    padding: 1rem;
  }
}
</style>
