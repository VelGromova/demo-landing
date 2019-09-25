<template>
  <div class="container">
    <section class="form section-padding responsive-flex">
      <h2 class="form__title">
        {{ formTitle }}
      </h2>
      <form @submit.prevent="submit"
            method="post"
            novalidate="true"
            v-if="!isSubmitted">
        <text-input
          :class="{ 'hasError': $v.name.value.$error }"
          class="form__input"
          :input-type="'text'"
          :label="name.label"
          :id="name.label"
          v-model="name.value">
          <p class="error"
             v-if="!$v.name.value.min">
            Field must have at least 2 characters.
            <!--TODO dynamic value of chars-->
          </p>
        </text-input>
        <text-input
          class="form__input"
          :input-type="'email'"
          :label="email.label"
          :id="email.label"
          v-model="email.value">
          <p class="error" v-if="!$v.email.value.email">Please, write a valid email.</p>
        </text-input>

        <textarea-input
          class="form__input"
          :label="message.label"
          :id="message.label"
          v-model="message.value"
        />
        <submit-button @click="submit">Send</submit-button>
        <div v-if="$v.name.$error"
             class="error__title" >
          Please, fill in the correct details.
        </div>
      </form>
      <transition name="load">
        <div v-if="this.isSubmitted" class="success__title">
          Thank you, {{ this.name.value}} !<br>
          We will contact you soon.
        </div>
      </transition>
    </section>
  </div>
</template>

<script>
// import { debounce } from 'lodash';
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';

import TextInput from './ui/TextInput';
import TextareaInput from './ui/TextareaInput';
import SubmitButton from './ui/SubmitButton';

export default {
  components: {
    TextareaInput,
    TextInput,
    SubmitButton,
  },
  mixins: [validationMixin],

  data() {
    return {
      formTitle: 'Question? We are here to help!',
      name: {
        label: 'name',
        value: null,
      },
      email: {
        label: 'email',
        value: null,
      },
      message: {
        label: 'message',
        value: null,
      },
      isSubmitted: false,
    };
  },

  validations: {
    name: {
      value: { required, min: minLength(2) },
    },
    email: {
      value: { required, email },
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.isSubmitted = true;
      }
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
    &:nth-child(-n+2) {
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
      grid-row-gap: 30px;
    }
    .btn-submit {
      margin-top: 30px;
      grid-row-start: 3;
      @media (max-width: 599px) {
        grid-row-start: inherit;
      }
    }
  }
  .error__title {
    position: absolute;
    bottom: 60px;
    color: var(--color-red);
    font: normal 0.8em/0.93em var(--default-font-family);
    @media(max-width: 599px) {
      bottom: 30px;
    }
  }
}

.success__title {
  font: normal 1.2em/1.2em var(--default-font-family);
  @media(max-width: 599px) {
    text-align: center;
  }
}
</style>
