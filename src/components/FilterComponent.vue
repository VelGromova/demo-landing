<template>
  <div class="container">
    <section class="filters">
      <div class="filters__result">
        <div class="filters__result__input">
          <label for="workSelect">Show me&nbsp;</label>
          <select-component
            id="workSelect"
            :options="workOptions"
            v-model="selectedWork" />
        </div>
        <div class="filters__result__input">
          <label for="industrySelect">in&nbsp;</label>
          <select-component
            id="industrySelect"
            :options="industryOptions"
            v-model="selectedIndustry" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SelectComponent from './ui/SelectComponent';

export default {
  components: {
    SelectComponent,
  },
  data() {
    return {
      selectedWork: 'all',
      selectedIndustry: 'all',
      workOptions: {
        'all works': 'all',
        'popular works': 'popular',
        'latest works': 'latest',
      },
      industryOptions: {
        'all industries': 'all',
        'entertainment industry': 'entertainment',
        'finance industry': 'finance',
        'art industry': 'art',
        'travel industry': 'travel',
      },
    };
  },
};
</script>

<style lang="scss">
  .filters {
    padding: 40px 0 60px;
    @media (max-width: 768px) { padding-top: 50px; }
    @media (max-width: 599px) { padding-top: 120px }
    &__result {
      display: flex;
      justify-content: flex-end;
      color: #A3A3A3;
      font-size: 30px;
      line-height: 32px;
      @media (max-width: 599px) {
        flex-direction: column;
        font-size: 24px;
      }
      &__input {
        display: flex;
        @media (max-width: 599px) {
          width: max-content;
          margin-right: 0;
        }
        &:first-of-type {
          margin-right: 24px;
        }
      }
     }
  }
</style>
