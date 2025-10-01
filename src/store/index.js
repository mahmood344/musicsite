import { defineStore } from 'pinia'
export const StateManegment = defineStore('index', {
  state: () => {
    return { 
      startAnimation:false
    }
  },
 getters:{
 
 },
  actions: {
   setStartAnimation(value){
    this.startAnimation = value;
   }
  },
})