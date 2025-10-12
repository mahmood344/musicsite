<template>
 <v-card flat max-width="1800" :height="$vuetify.display.smAndDown?500:950" class="d-flex align-center justify-center bg-transparent mx-auto" style="overflow: visible;">
  <v-row class="w-100">
    <v-col cols="12" class="d-flex justify-center">
        <v-avatar :size=$vuetify.display.smAndDown?200:400 :class="store.startAnimation?'logoTop':'logoBottom'">
      <v-img
        alt="John"
        src="/imgs/logo.jpg"
      ></v-img>
    </v-avatar></v-col>
    <v-col cols="12" class="d-flex justify-center">
        <h1 style="font-size: 4rem;letter-spacing: 1rem;color: #8a1b1e;" :style="$vuetify.display.smAndDown?'font-size:1.5rem;letter-spacing: 0.5rem':'font-size:4rem;letter-spacing: 1rem'">EHSAN NEYZAN</h1>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
        <v-btn v-on:click="goToRoute" style="background: #8a1b1e;" size="x-large" class="px-4 text-white"> <v-icon class="ml-5">mdi-music</v-icon>همه آلبوم ها</v-btn>
    </v-col>
    <v-col cols="12">
      <Footer></Footer>
    </v-col>
  </v-row>
</v-card>
</template>

<script setup>
import {ref , watch} from 'vue';
import { useRouter , useRoute } from 'vue-router';
import { StateManegment } from '../store/index.js';
import Footer from '../components/Footer.vue';
const store = StateManegment();
const Router = useRouter();
const Route = useRoute();
function goToRoute(){
    console.log(Router.currentRoute.value.name == 'Home');
    if(Router.currentRoute.value.name == 'Home'){ 
        store.setStartAnimation(true)
    setTimeout(() => {
        Router.push({name:'Albums'})
    }, 500);
    }
    else{
        store.setStartAnimation(false)
    setTimeout(() => {
        Router.push({name:'Home'})
    }, 500);
    }
    
}
watch(
  () => Route.name,
  (newName, oldName) => {
    console.log(newName);
    if (newName === 'Albums') {
      store.setStartAnimation(true)
    } else if (newName === 'Home') {
      store.setStartAnimation(false)
    }
  },
  { immediate: true }
)
</script>

<style>
@keyframes moveToTopLeft {
  0% {
    transform: translateY(0px) scale(1);
  }
  100% {
    transform: translateY(-105%) scale(0.2);
  }
}
@keyframes moveBottomLeft {
   0% {
       transform: translateY(-100%) scale(0.3);
}
100% {
      transform: translateY(0px) scale(1);
  }
}
@media (max-width: 1000px) {
  @keyframes moveToTopLeft {
    0% {
      transform: translateY(0px) scale(0.8);
    }
    100% {
      transform: translateY(-110%) scale(0.45); /* کمتر حرکت می‌کنه و بزرگتر میمونه */
    }
  }

  @keyframes moveBottomLeft {
    0% {
      transform: translateY(-200%) scale(0.5);
    }
    100% {
      transform: translateY(0px) scale(0.8);
    }
  }
}
.logoTop {
  animation: moveToTopLeft 0.5s ease-in-out forwards;
}
.logoBottom{
  animation: moveBottomLeft 0.5s ease-in-out forwards;
}
</style>