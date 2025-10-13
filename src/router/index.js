import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Albums from '../views/Albums.vue';
import SongLyrics from '../views/SongLyrics.vue'
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
   { path: '/songlyrics', 
    name:'SongLyrics',
    component:SongLyrics,
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