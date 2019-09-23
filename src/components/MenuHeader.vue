<template>
  <menu class="menu">
    <div class="container">
      <div class="menu__layout">
        <router-link to="/" class="menu__logo">
          <img src="@assets/images/DEPT-logo-black.svg" alt="DEPT">
        </router-link>
        <button :open-ref="menuNav" class="menu__button" @click="openMenu">Menu</button>
      </div>
    </div>
  </menu>
</template>

<script>

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
</style>
