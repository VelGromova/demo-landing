<template>
  <div class="container">
    <ul class="portfolio">
        <story-component
          v-for="story in portfolio"
          :key="story.id"
          :story-src="story.src"
          :story-name="story.name"
          :story-title="story.title"
          :is-large="story.isLarge"
          :is-text="story.isText"
        >
        </story-component>
        <li is="feedback-component" class="portfolio__feedback"></li>
    </ul>
  </div>
</template>

<script>
import portfolio from '@assets/data/portfolio.json';

import StoryComponent from './StoryComponent';
import FeedbackComponent from './FeedbackComponent';

export default {
  components: {
    StoryComponent,
    FeedbackComponent,
  },
  data() {
    return {
      portfolio,
    };
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
