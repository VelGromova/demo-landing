<template>
  <button class="btn-main" @click="click">
    <slot />
  </button>
</template>

<script>
import buttonMixin from '../../mixins/buttonMixin';

export default {
  mixins: [buttonMixin],
};
</script>

<style>
.btn-main {
  font-size: 15px;
  line-height: 30px;
  color: var(--color-white);
  background: var(--color-black);
  text-transform: uppercase;
  padding: 8px 40px 12px;
  @media (max-width: 599px) {
    width: 100$
  }
}
</style>
