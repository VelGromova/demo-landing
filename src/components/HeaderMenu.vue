<template>
  <div class="overlay">
    <menu class="menu"
          :class="{
            menu__opened: openMenu,
            menu__scrolled: scrollPosition > 25
          }
      ">
      <div class="container">
        <div class="menu__layout">
            <router-link to="/" class="menu__logo">
              <dept-logo/>
            </router-link>
            <hamburger class="menu__button"
                       @click="toggleMenu"
                       :close-state="openMenu"/>
          </div>
          <transition name="menu" mode="in-out">
            <navigation-component v-if="openMenu" is-vertical="true"/>
          </transition>
      </div>
    </menu>
  </div>
</template>

<script>
import DeptLogo from '@assets/images/DeptLogo';
import Hamburger from './ui/Hamburger';
import NavigationComponent from './NavigationComponent';

export default {
  components: {
    Hamburger,
    NavigationComponent,
    DeptLogo,
  },
  data() {
    return {
      openMenu: false,
      closeState: false,
      scrollPosition: null,
    };
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 25) {
        setTimeout(() => { this.scrollPosition = window.scrollY; }, 3000);
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroy() {
    window.removeEventListener('scroll', this.updateScroll);
  },
};
</script>

<style lang="scss">
.overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  background: transparent;
  z-index: 1;
  .menu {
    padding-top: 48px;
    @media (max-width: 599px) {
      padding: 9px 0;
      background: var(--color-white);
    }
    &__layout {
      display: flex;
      justify-content: space-between;
      height: 53px;
      border-bottom: 1px solid var(--color-black);
      @media (max-width: 599px) {
        align-items: center;
        height: 32px;
        border-bottom: 0;
      }
    }
    &__logo {
      align-self: start;
      @media (max-width: 599px) {
        align-self: center;
      }
    }
    &__button {
      font-size: 18px;
      line-height: 32px;
      text-transform: uppercase;
      padding: 0;
      &:before {
        position: absolute;
        content: 'Menu';
        right: 30px;
      }
    }
  }
  .menu__scrolled {
    padding-top: 22px;
    background-color: var(--color-white);
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.3);
    @media (max-width: 599px) {
      padding-top: 18px;
    }
    .menu__layout {
      border: 0;
    }
  }
  .menu__opened {
    height: 100vh;
    overflow: scroll;
    background: var(--color-black);
    color: var(--color-white);
    transition: 0.5s ;
    box-sizing: border-box;
    z-index: 2;
    @media (max-width: 599px) {
      border: 0;
    }
    ul {
      transition: all 0s ease-in;
      position: relative;
      left: 0;
      z-index: 2;
    }
    &__button {
      &:before {
        content: '';
      }
    }
    .nav__link {
      display: block;
      transition: all .15s;
      text-decoration: none;
      color: var(--color-white);
      line-height: 1;
      padding: 8px 6px 0;
      &:hover {
        transition: all .15s;
      }
    }
    &:after {
      content: '';
      position: fixed;
      display: block;
      background:
        linear-gradient(0deg, rgba(14, 14, 14, 0.990206) 35.32%,
          rgba(14, 14, 14, 0.0001) 100%);
      height: 90px;
      width: 100%;
      bottom: 0;
      z-index: 2;
    }
  }
}

</style>
