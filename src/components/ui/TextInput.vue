<template>
  <div class="text-input">
    <label
      class="text-input__label"
      :for="id">{{ label }}
    </label>
    <input
      class="text-input__value"
      type="text"
      :id="id"
      :value="value"
      @input="handleChange">
    <span class="border"></span>
    <p class="error-msg">{{ error }}</p>
  </div>
</template>

<script>
import inputMixin from '@mixins/inputMixin';

export default {
  mixins: [inputMixin],
  props: {
    value: null,
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      required: false,
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
    border-bottom: 1px solid #DDD;
    font-size: 1em;
    width: 100%;
    & ~ .border {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--color-blue);
    }
    &:hover {
      border-bottom: 1px solid rgba(51,51,51,0.5);
      transition: 0.3s;
    }
    &:focus ~ .border {
      width: 100%;
      transition: 0.5s;
    }
  }
  .error-msg {
    position: absolute;
    padding-top: 11px;
    color: var(--color-red);
    font: normal 0.8em/0.93em var(--default-font-family);
  }
}
</style>
