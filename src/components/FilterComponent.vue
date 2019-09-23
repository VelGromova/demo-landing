<template>
  <div class="container">
    <section class="filters">
      <div class="filters__result">
        <label for="workSelect">Show me:&nbsp;</label>
        <select-component
          class="filter-input"
          id="workSelect"
          :options="workOptions"
          v-model="selectedWork" />
        <label for="industrySelect">in&nbsp;</label>
        <select-component
          class="filter-input"
          id="industrySelect"
          :options="industryOptions"
          v-model="selectedIndustry" />
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
    padding: 60px 0;
    &__result {
      display: flex;
      justify-content: flex-end;
      color: #A3A3A3;
      font-size: 30px;
      line-height: 32px;
        .filter-input:first-of-type {
          margin-right: 24px;
        }
     }
  }
</style>
