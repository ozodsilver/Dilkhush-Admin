import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard'
import Profile from '@/components/Profile'
import Tables from '@/components/Tables'
import Band from '../components/Band'
import BadGateway from '@/components/BadGateway'
import Login from '@/components/Login'
import Home from '../Home.vue'
import NoActive from '../components/Goods/NoActive.vue'
import screen from '../components/screen.vue'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },


    {
      path: '/Home',
      component: Home
    },

    
    {
      path: '/NoActive',
      component: NoActive
    },



    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: { page: 1 },
      alias: '/'
    },

    {
      path: '/BandQilish',
      name: 'band',
      component: Band,
      
    },
    {
      path: '/profile',
      name: 'Profile',
      props: { page: 2 },
      component: Profile
    },
    {
      path: '/tables',
      name: 'Tables',
      props: { page: 3 },
      component: Tables
    },

    {
      path: '/screen',
      name: 'screen',
      props: { page: 4 },
      component: screen
    },
   
    {
      path: '/addProduct',
      name: 'BadGateway',
      props: { page: 5 },
      component: BadGateway
    },
    {
      path: '*',
    
      redirect: '/'
    }
  ]
})