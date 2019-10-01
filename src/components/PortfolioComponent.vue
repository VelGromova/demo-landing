<template>
  <div class="container">
    <filter-component />
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

import FilterComponent from './FilterComponent';
import StoryComponent from './StoryComponent';
import FeedbackComponent from './FeedbackComponent';

export default {
  components: {
    FeedbackComponent,
    FilterComponent,
    StoryComponent,
  },
  data() {
    return {
      portfolio,
    };
  },
  computed: {
    portfolioBefore() {
      if (this.portfolio.length > 2) {
        return this.portfolio.slice(0, -2);
      }
      return this.portfolio;
    },
    portfolioAfter() {
      if (this.portfolio.length > 2) {
        return this.portfolio.slice(-2);
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
    border-bottom: 2px solid #DDD;
    @media (max-width: 599px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 47px;
    }
    &__feedback {
      grid-column: auto / span 8;
    }
  }
</style>
