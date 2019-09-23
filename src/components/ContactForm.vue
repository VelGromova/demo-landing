<template>
  <div class="container">
    <section class="form section-padding responsive-flex">
      <h2 class="form__title">
        Question? We are here to help!
      </h2>
      <form ref="form" @submit.prevent="submit">
        <text-input
          class="form__input"
          :label="name.label"
          :id="name.label"
          :value="value"
          @handleChange="handleChange($event)"
        >
        </text-input>
        <text-input
          class="form__input"
          :label="email.label"
          :id="email.label"
          :error="errorMsg"
          :value="value"
          @handleChange="handleChange($event)"
        ></text-input>
        <textarea-input
          class="form__input"
          :label="message.label"
          :id="message.label"
          :value="value"
          @handleChange="handleChange($event)"
        ></textarea-input>
        <submit-button @click="submit">Send</submit-button>
      </form>
      <div class="success" v-if="savingSuccessful">
        {{ successMsg }}
      </div>
    </section>
  </div>
</template>

<script>
import TextInput from './ui/TextInput';
import TextareaInput from './ui/TextareaInput';
import SubmitButton from './ui/SubmitButton';

export default {
  components: {
    TextareaInput,
    TextInput,
    SubmitButton,
  },
  data() {
    return {
      name: {
        label: 'name',
      },
      email: {
        label: 'email',
      },
      message: {
        label: 'message',
      },
      errorMsg: 'This field is required',
      successMsg: 'Thank you! We will contact you as soon as possible',
    };
  },
  methods: {
    submit() {
      this.$refs.form.submit();
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  &__title {
    width: 30%;
    margin-right: 50px;
    @media (max-width: 991px) {
      margin-right: 30px;
    }
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 28px;
      margin-right: 0;
    }
    @media (max-width: 599px) {
      text-align: center;
    }
  }
  &__input {
    max-width: 300px;
    @media (max-width: 768px) {
      max-width: 100%;
    }
    &:not(:last-of-type) {
      margin-bottom: 78px;
      @media (max-width: 768px) {
        margin-bottom: 28px;
      }
    }
  }
  form {
    display: grid;
    grid: {
      template-columns: repeat(2, 1fr);
      column-gap: 50px;
    }
    @media (max-width: 599px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .btn-submit {
      margin-top: 30px;
      grid-row-start: 3;
      @media (max-width: 599px) {
        grid-row-start: inherit;
      }
    }
  }
}
</style>
