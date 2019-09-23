<template>
  <div>
    <header class="header">
      <div class="menu-layout">
        <div class="container">
          <menu class="menu">
            <router-link to="/" class="menu__logo">
              <img src="@assets/images/DEPT-logo-black.svg" alt="DEPT">
            </router-link>
            <button class="menu__button" @click="openMenu">Menu</button>
          </menu>
        </div>
      </div>
      <div class="container">
        <div class="header__content">
          <h1>Work</h1>
          <main-button class="btn__main">
            View Case
          </main-button>
        </div>
      </div>
    </header>
    <full-screen-menu />
  </div>
</template>

<script>
import MainButton from '../ui/MainButton';
import FullScreenMenu from '../FullScreenMenu';

export default {
  components: {
    MainButton,
    FullScreenMenu,
  },
  methods: {
    // closeMenu() {
    //   this.$refs.menuNav.style.left = '100%';
    // },
  },
};

</script>

<style lang="scss" scoped>
  .header {
    background: url('../../assets/images/header-video.png') center no-repeat/cover;
    height: 96vh;
    margin: 20px;
    @media (max-width: 991px) { margin: 10px; }
    @media (max-width: 599px) { margin: 0; }
    .menu-layout {
      @media (max-width: 599px) { background: var(--color-white); }
    }
    .menu {
      display: flex;
      justify-content: space-between;
      height: 53px;
      border-bottom: 1px solid var(--color-black);
      padding-top: 30px;
      @media (max-width: 599px) {
        border-bottom: 0;
        padding: 9px 0;
      }
      &__logo {
        align-self: start;
        @media (max-width: 599px) {
          align-self: center;
        }
      }
      &__button {
        position: relative;
        font-size: 18px;
        line-height: 32px;
        text-transform: uppercase;
        padding-right: 30px;
        &:before, &:after {
          position: absolute;
          content: '';
          width: 20px;
          height: 2px;
          background-color: var(--color-black);
          margin: 6px 0;
          right: 0;
        }
        &:before {
          bottom: 19px;
        }
        &:after {
          bottom: 26px;
        }
      }
    }
    &__content {
      position: relative;
      height: calc(100vh - 113px);
      box-sizing: border-box;
      padding: 0 0 100px;
      @media (max-width: 599px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
      }
      .btn-main {
        position: absolute;
        right: 0;
        bottom: 50px;
      }
    }
  }
</style>
