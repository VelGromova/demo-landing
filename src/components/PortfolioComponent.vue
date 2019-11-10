<template>
  <div class="container">
    <div class="filters">
      <div class="filters__result">
        <div class="filters__result__input">
          <label for="workSelect">Show me&nbsp;</label>
          <select-component
            id="workSelect"
            :options="filterNames"
            v-model="selectedWork"
          />
        </div>
      </div>
    </div>
    <ul class="portfolio">
        <story-component
          v-for="story in portfolioBefore"
          :key="story.id"
          :story-src="story.src"
          :story-name="story.name"
          :story-title="story.title"
          :is-large="story.isLarge"
          :is-text="story.isText"
        />
        <feedback-component class="portfolio__feedback"/>
        <story-component
          v-for="story in portfolioAfter"
          :key="story.id"
          :story-src="story.src"
          :story-name="story.name"
          :story-title="story.title"
          :is-large="story.isLarge"
          :is-text="story.isText"
        />
    </ul>
  </div>
</template>

<script>
import portfolio from '@assets/data/portfolio.json';
import StoryComponent from './StoryComponent';
import FeedbackComponent from './FeedbackComponent';
import SelectComponent from './ui/SelectComponent';

export default {
  components: {
    FeedbackComponent,
    StoryComponent,
    SelectComponent,
  },
  data() {
    return {
      portfolio,
      selectedWork: 'all',
      selectedIndustry: 'all',
    };
  },
  computed: {
    filterNames() {
      const getType = this.portfolio.map(story => story.type);
      return (['all', ...new Set(getType)]);
    },
    filteredPortfolio() {
      if (this.selectedWork === 'popular') {
        return this.portfolio.filter(story => story.type === 'popular');
      }
      if (this.selectedWork === 'latest') {
        return this.portfolio.filter(story => story.type === 'latest');
      }
      return this.portfolio.filter(story => story.type);
    },
    portfolioBefore() {
      if (this.filteredPortfolio.length > 2) {
        return this.filteredPortfolio.slice(0, -2);
      }
      return this.filteredPortfolio;
    },
    portfolioAfter() {
      if (this.filteredPortfolio.length > 2) {
        return this.filteredPortfolio.slice(-2);
      }
      return [];
    },
  },
};
</script>

<style lang="scss">
  .portfolio {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 30px;
    padding-bottom: 60px;
    @media (max-width: 599px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 47px;
    }
    &__feedback {
      grid-column: auto / span 8;
    }
  }
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
