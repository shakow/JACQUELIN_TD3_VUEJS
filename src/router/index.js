import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EditMovie from '../components/EditMovie'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id/edit',
    name: 'Edit-movie',
    components: {
        default: EditMovie
    }
  }
]


const router = new VueRouter({
  routes
})

export default router
