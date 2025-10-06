<template>
  <v-toolbar class="bg-transparent py-4" style="border-bottom: 1px solid grey;">
   <v-row class="align-center text-white px-8">
  <!-- موبایل: همبرگر -->
  <v-col cols="5" class="d-flex d-md-none justify-start" >
    <v-btn icon @click="drawer = !drawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-col>

  <!-- موبایل: لوگو -->
  <v-col cols="7" class="d-flex d-md-none justify-start">
    <v-avatar size="80" v-show="$router.currentRoute.value.name === 'Albums'">
      <v-img
        alt="John"
        src="/imgs/logo.jpg"
      ></v-img>
    </v-avatar>
  </v-col>

  <!-- دسکتاپ: منو -->
  <v-col md="4" class="d-none d-md-flex justify-space-around menu">
    <router-link :to="{name:'Home'}"><v-btn variant="plain">خانه</v-btn></router-link>
    <router-link :to="{name:'Albums'}"><v-btn variant="plain">آلبوم‌ها</v-btn></router-link>
    <v-btn variant="plain">کنسرت ها</v-btn>
    <v-btn variant="plain">ویدیو ها</v-btn>
    <v-btn variant="plain">درباره ما</v-btn>
    <v-btn variant="plain">تماس با ما</v-btn>
  </v-col>

  <!-- دسکتاپ: لوگو -->
  <v-col md="4" class="d-none d-md-flex justify-center">
    <v-avatar size="80" v-show="$router.currentRoute.value.name === 'Albums'">
      <v-img
        alt="John"
        src="/imgs/logo.jpg"
      ></v-img>
    </v-avatar>
  </v-col>

  <!-- دسکتاپ: جستجو -->
  <v-col md="4" class="d-none d-md-flex justify-end">
    <v-text-field
      placeholder="جستجو"
      prepend-inner-icon="mdi-magnify"
      hide-details
      variant="outlined"
      density="compact"
      style="background: #161616;"
    ></v-text-field>
  </v-col>
</v-row>
    <v-navigation-drawer class="bg-black px-2" v-model="drawer" temporary>
      <v-list class="pt-8 menu">
        <router-link :to="{name:'Home'}"><v-list-item link>خانه</v-list-item></router-link>
        <router-link :to="{name:'Albums'}"><v-list-item link>آلبوم‌ها</v-list-item></router-link>
        <v-list-item link>کنسرت ها</v-list-item>
        <v-list-item link>ویدیو ها</v-list-item>
        <v-list-item link>کنسرت ها</v-list-item>
        <v-list-item link>درباره ما</v-list-item>
        <v-list-item link>تماس با ما</v-list-item>
      </v-list>
      <template v-slot:prepend>
          <div class="pa-2">
           <v-text-field
      placeholder="جستجو"
      prepend-inner-icon="mdi-magnify"
      hide-details
      variant="outlined"
      density="compact"
      style="background: #161616;"
    ></v-text-field>
          </div>
        </template>
      <template v-slot:append>
          <div class="pa-2">
            <v-btn variant="outlined" v-on:click="drawer = !drawer" block>
              بسنن
            </v-btn>
          </div>
        </template>
    </v-navigation-drawer>
  </v-toolbar>
</template>

<script setup>
import { ref , watch} from 'vue'
import { useRouter , useRoute } from 'vue-router';
import { StateManegment } from '../store/index.js';
const store = StateManegment();
const Router = useRouter();
const Route = useRoute();
const drawer = ref(false)
function goToAlbums(){
    store.setStartAnimation(true)
    setTimeout(() => {
        Router.push({name:'Albums'})
    }, 1400);
}
function goToHome(){
        store.setStartAnimation(false)
        Router.push({name:'Home'})
    setTimeout(() => {
    }, 1000);
    }
    watch(
  () => Route.name,
  (newName, oldName) => {
    if (newName === 'Albums') {
      store.setStartAnimation(true)
    } else if (newName === 'Home') {
      store.setStartAnimation(false)
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.menu a {
  color: white; /* همه لینک‌ها سفید */
  text-decoration: none;
  transition: color 0.3s ease;
}

/* وقتی روت فعاله */
.menu a.router-link-active {
  color: #8a1b1e
}

/* اگر فقط بخوای رنگ لینک دقیقاً برابر مسیر فعلی تغییر کنه (نه لینک‌های parent) */
.menu a.router-link-exact-active {
  color: #8a1b1e;
}
</style>