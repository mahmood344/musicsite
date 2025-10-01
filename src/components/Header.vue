<template>
  <v-toolbar class="bg-transparent py-4" style="border-bottom: 2px solid grey;">
    <!-- <v-row class="d-flex align-center">
        <v-col class="d-flex d-md-none" cols="2" style="border: 1px solid white">
            <v-btn icon @click="drawer = !drawer">
            <v-icon class="text-white">mdi-menu</v-icon>
            </v-btn>
        </v-col>
        <v-col class="d-none d-md-flex text-white" md="4" style="border: 1px solid white">
            <v-btn v-on:click="goToHome" variant="plain" active-class="text-red-500 font-bold">خانه</v-btn>
            <v-btn v-on:click="goToAlbums" variant="plain">آلبوم ها</v-btn>
        </v-col>
        <v-col cols="10"  class="d-flex justify-center" md="5" style="border: 1px solid white">
            <img src="/imgs/logo.PNG" alt="" v-show="$router.currentRoute.value.name === 'Albums'">
        </v-col>
        <v-col cols="3" md="3" class="d-none d-sm-flex px-md-8" style="border: 1px solid white">
            <v-text-field placeholder="جستجو" prepend-inner-icon="mdi-magnify" class="bg-black" hide-details variant="outlined" density="compact"></v-text-field>
        </v-col>
    </v-row> -->
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
  <v-col md="4" class="d-none d-md-flex justify-start">
    <v-btn variant="plain">خانه</v-btn>
    <v-btn variant="plain">آلبوم‌ها</v-btn>
    <v-btn variant="plain">آلبوم‌ها</v-btn>
    <v-btn variant="plain">آلبوم‌ها</v-btn>
    <v-btn variant="plain">آلبوم‌ها</v-btn>
    <v-btn variant="plain">آلبوم‌ها</v-btn>
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
    <v-navigation-drawer class="bg-black" v-model="drawer" temporary>
      <v-list>
        <v-list-item link>خانه</v-list-item>
        <v-list-item link>درباره ما</v-list-item>
        <v-list-item link>تماس</v-list-item>
      </v-list>
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

</style>