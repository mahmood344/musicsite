<!-- :height="$vuetify.display.smAndDown?500:950" -->
<template>
 <v-card flat max-width="1800" class="h-screen d-flex align-center justify-center bg-transparent mx-auto" style="overflow: visible;">
  <v-row class="w-100">
    <v-col cols="12" class="d-flex justify-center">
        <v-avatar :size=$vuetify.display.smAndDown?200:300 :class="store.startAnimation?'logoTop':'logoBottom'">
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
    <v-col cols="12" class="d-flex justify-center my-5">
    <canvas ref="canvas"></canvas>
    </v-col>
  </v-row>
</v-card>
<v-row>
  <v-col cols="12">
      <Footer></Footer>
    </v-col>
</v-row>
</template>

<script setup>
import {ref , watch , onMounted } from 'vue';
import { useRouter , useRoute } from 'vue-router';
import { StateManegment } from '../store/index.js';
import Footer from '../components/Footer.vue';
onMounted(() => {
  QRCode.toCanvas(canvas.value, text, { width: 100 , height:100n }, function (error) {
    if (error) console.error(error)
  })
})
import QRCode from 'qrcode'
const canvas = ref(null)
const text = 'https://example.com'
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
    transform: translateY(-99%) scale(0.2);
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
      transform: translateY(-145%) scale(0.5); 
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






