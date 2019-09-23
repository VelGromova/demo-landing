<template>
  <div>
    <div ref="menuNav" class="menu">
    <div class="container">
      <navigation-component is-vertical="true"/>
    </div>
  </div>
    <a @click="openMenu()" style="color: purple; font-size: 3rem">OPEN</a>
  </div>
</template>

<script>
import NavigationComponent from './NavigationComponent';

export default {
  components: {
    NavigationComponent,
  },
  methods: {
    openMenu() {
      this.$refs.menuNav.style.left = '0';
    },
  }
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 100%;
  color: var(--color-white);
  background: var(--color-black);
  overflow-x: hidden;
  transition: 0.5s;
  border: 20px solid var(--color-white);
  box-sizing: border-box;
  @media (max-width: 991px) { border: 10px solid var(--color-white); }
  @media (max-width: 599px) { border: 0; }
  .closeBtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
  }
}
</style>
