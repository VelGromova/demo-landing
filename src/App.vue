<template>
  <div id="app">
    <home-component/>
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
