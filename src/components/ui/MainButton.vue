<template>
  <button class="btn-main" @click="click">
    <slot />
  </button>
</template>

<script>
import buttonMixin from '@mixins/buttonMixin';

export default {
  mixins: [buttonMixin],
};
</script>

<style lang="scss">
.btn-main {
  font-size: 15px;
  line-height: 30px;
  color: var(--color-white);
  background: var(--color-black);
  text-transform: uppercase;
  padding: 8px 40px 12px;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.1)
  }
}
</style>
