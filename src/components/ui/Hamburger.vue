<template>
    <button class="hamburger"
            :class="{ hamburger__close: closeState }"
            @click="click"
    >
      <span class="bar bar-top"></span>
      <span class="bar bar-bottom"></span>
    </button>
</template>

<script>
import buttonMixin from '@mixins/buttonMixin';

export default {
  mixins: [buttonMixin],

  props: {
    closeState: true,
  },
};
</script>

<style lang="scss">
.hamburger {
  position: relative;
  top: -10px;
  height: 54px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  background: transparent;
  @media (max-width: 599px) {
    top: 0;
  }
  .bar {
    position: relative;
    width: 20px;
    height: 2px;
    background-color: var(--color-black);
    margin: 2px 0;
    right: 0;
    transition: 0.5s;
  }
  &__close {
    .bar {
      background-color: var(--color-white);
    }
    .bar-top {
      top: 15px;
      transform: rotate(45deg) translate(-9px, -7px);
    }
    .bar-bottom {
      bottom: 13px;
      transform: rotate(-45deg) translate(-9px, 6px);
    }
  }
  &:before {
    position: absolute;
    content: 'Menu';
    right: 30px;
  }
}
</style>
