<template>
  <div class="text-input">
    <label
      class="text-input__label"
      :for="id">{{ label }}
    </label>
    <textarea
      rows="4"
      class="text-input__value"
      :id="id"
      :value="value"
      @input="handleChange">
    </textarea>
    <span class="border"></span>
  </div>
</template>

<script>
import inputMixin from '@mixins/inputMixin';

export default {
  mixins: [inputMixin],
  props: {
    value: {
      type: String,
    },
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .text-input {
    position: relative;
    &__label {
      font: bold 0.94em/1.875em var(--default-font-family);
      text-transform: uppercase;
    }
    &__value {
      border: 0;
      padding: 10px 0;
      border-bottom: 1px solid #ccc;
      font-size: 1em;
      width: 100%;
      &:hover {
        border-bottom: 1px solid rgba(51,51,51,0.5);
        transition: 0.3s;
      }
      & ~ .border {
        position: absolute;
        bottom: 7px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--color-blue);
      }
      &:focus ~ .border {
        width: 100%;
        transition: 0.5s;
      }
    }
  }
</style>
