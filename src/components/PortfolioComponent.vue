<template>
  <div class="container">
    <div class="filters">
      <div class="filters__result">
        <div class="filters__result__input">
          <label for="workSelect">Show me&nbsp;</label>
          <select-component
            id="workSelect"
            :options="filterTypeNames"
            v-model="selectedWork"
          />
        </div>
        <div class="filters__result__input">
          <label for="industrySelect">in&nbsp;</label>
          <select-component
          id="industrySelect"
          :options="filterIndustryNames"
          v-model="selectedIndustry" />
        </div>
      </div>
    </div>
    <transition-group name="portfolio" tag="ul" class="portfolio">
        <story-component
          v-for="story in portfolioBefore"
          :key="story.id"
          :story-src="story.src"
          :story-name="story.name"
          :story-title="story.title"
          :is-large="story.isLarge"
          :is-text="story.isText"
        />
        <feedback-component class="portfolio__feedback" key="feedback"/>
        <story-component
          v-for="story in portfolioAfter"
          :key="story.id"
          :story-src="story.src"
          :story-name="story.name"
          :story-title="story.title"
          :is-large="story.isLarge"
          :is-text="story.isText"
        />
    </transition-group>
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
      selectedWork: 'all types',
      selectedIndustry: 'all industries',
    };
  },
  computed: {
    filterTypeNames() {
      const getType = this.portfolio.map(story => story.type);
      return (['all types', ...new Set(getType)]);
    },
    filterIndustryNames() {
      const getIndustry = this.portfolio.map(story => story.industry);
      return (['all industries', ...new Set(getIndustry)]);
    },
    filteredPortfolio() {
      const initialPortfolio = this.portfolio;
      let filtered = this.portfolio;

      if (this.selectedWork !== 'all types') {
        filtered = filtered.filter(story => this.selectedWork === story.type);
      }
      if (this.selectedIndustry !== 'all industries') {
        filtered = filtered.filter(story => this.selectedIndustry === story.industry);
      }
      return filtered.length ? filtered : initialPortfolio;
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
    opacity: 1;
    padding-bottom: 60px;
    transform-origin: 10% 50%;
    z-index: 1;
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
        label {
          margin-right: 5px;
        }
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
