<template>
  <button class="btn-cta" @click="click">
    <slot />
  </button>
</template>

<script>
import buttonMixin from '../../mixins/buttonMixin';

export default {
  mixins: [buttonMixin],
};
</script>

<style lang="scss">
  .btn-cta {
    width: max-content;
    text-transform: uppercase;
    color: var(--color-blue);
    font: bold 0.875em/1.875em var(--default-font-family);
    padding: 0;
    transition: 0.5ms;
    &:before {
      display: inline-block;
      content: '';
      width: 0;
      height: 0;
      border: {
        top: 5px solid transparent;
        bottom: 5px solid transparent;
        left: 5px solid var(--color-blue);
      }
      padding-right: 10px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
</style>
