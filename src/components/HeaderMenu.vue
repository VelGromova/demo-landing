<template>
  <menu class="menu"
        :class="{ menu__opened: openMenu }">
    <div class="container">
      <!--TODO create directive to fix header on scroll and change style-->
      <div class="menu__layout">
        <router-link to="/" class="menu__logo">
          <dept-logo/>
        </router-link>
        <hamburger class="menu__button"
                   @click="toggleMenu"
                   :close-state="openMenu"/>
      </div>
      <transition name="fadeInRight" mode="in-out">
        <navigation-component v-if="openMenu" is-vertical="true"/>
      </transition>
    </div>
  </menu>
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
    };
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    },
  },
};
</script>

<style lang="scss">
.menu {
  padding-top: 28px;
  background: transparent;
  @media (max-width: 599px) {
    background: var(--color-white);
    padding: 9px 0;
  }
  &__layout {
    display: flex;
    justify-content: space-between;
    height: 53px;
    border-bottom: 1px solid var(--color-black);
    @media (max-width: 599px) {
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
  }
}


.menu__opened {
  height: 100%;
  background: var(--color-black);
  color: var(--color-white);
  overflow-x: hidden;
  transition: 0.5s;
  box-sizing: border-box;
  z-index: 1;
  @media (max-width: 599px) {
    border: 0;
  }
  ul {
    transition: all 0s;
    position: relative;
    left: 0;
    z-index: 2;
  }
  .nav__link {
    transition: all .15s;
    text-decoration: none;
    font-size: 2em;
    color: var(--color-white);
    padding: 5px;
    display: block;
    &:hover {
      transition: all .15s;
    }
  }
}

</style>
