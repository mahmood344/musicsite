import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Albums from '../views/Albums.vue';
const routes = [
  { path: '/', 
    name:'Home',
    component:Home,
    meta: { breadcrumb: 'خانه' }
   },
   { path: '/albums', 
    name:'Albums',
    component:Albums,
    meta: { breadcrumb: 'تمام اهنگ ها' }
   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;