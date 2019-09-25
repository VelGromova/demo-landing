<template>
  <button class="btn-submit" type="submit" @click="click">
    <slot />
  </button>
</template>

<script>
import buttonMixin from '@mixins/buttonMixin';

export default {
  mixins: [buttonMixin],
};
</script>

<style>
.btn-submit {
  background-color: var(--color-blue);
  width: 140px;
  height: 50px;
  font: bold 0.94em/0.94em var(--default-font-family);
  color: var(--color-white);
  text-transform: uppercase;
}
</style>

