<template>
  <div class="select-input">
    <select
      class="ui-select"
      v-model="selectedOption"
      @input="handleChange">
      <option v-for="option in options"
              :value="option"
              :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<script>
import inputMixin from '@mixins/inputMixin';

export default {
  mixins: [inputMixin],
  data() {
    return {
      selectedOption: null,
    };
  },
  props: {
    value: null,
    options: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.selectedOption = this.value;
  },
  watch: {
    value(newValue) {
      this.selectedOption = newValue;
    },
  },
};
</script>

<style lang="scss">
  .select-input {
    position: relative;
    .ui-select {
      font-family: var(--base-font-family);
      font-size: inherit;
      line-height: inherit;
      padding-right: 15px;
      border: {
        radius: 0;
        bottom: 1px solid var(--color-black);
      }
    }
    &:after {
      position: absolute;
      top: 12px;
      right: 1px;
      content: '';
      width: 0;
      height: 0;
      border: {
        style: solid;
        width: 6px 4px 0 4px;
        color: var(--color-black) transparent transparent transparent;
      }
    }
    option {
      font-size: var(--base-font-size);
    }
  }
</style>
