<template>
  <div id="app">
    <transition name="load" mode="out-in" appear>
      <home-component/>
    </transition>
  </div>
</template>

<script>
import '@/assets/css/app.css';
import HomeComponent from './components/pages/HomeComponent';

export default {
  name: 'App',
  components: {
    HomeComponent,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
