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
  }
</style>
