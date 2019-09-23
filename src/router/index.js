import VueRouter from 'vue-router';
import Vue from 'vue';
// import HomeComponent from '@/components/HomeComponent';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/work',
      name: 'Work',
    },
    {
      path: '/service',
      name: 'Service',
    },
    {
      path: '/stories',
      name: 'Stories',
    },
    {
      path: '/about',
      name: 'About',
    },
    {
      path: '/careers',
      name: 'Careers',
    },
    {
      path: '/contact',
      name: 'Contact',
    },
    {
      path: '/terms-conditions/',
      name: 'Terms and Condition',
    },
  ],
});
