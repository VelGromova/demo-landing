<template>
    <li
      :class="{ portfolio__story__big :largeStory }"
      class="portfolio__story"
    >
      <figure class="portfolio__story__img">
        <img :src="require(`@assets/images/${ story.src }.png`)"
             :alt="story.name">
      </figure>
      <span class="portfolio__story__name">{{ story.name }}</span>
      <span class="portfolio__story__title">{{ story.title }}</span>
      <cta-button class="cta-btn">View case</cta-button>
    </li>
</template>

<script>
import CtaButton from './ui/CtaButton';

export default {
  components: {
    CtaButton,
  },
  props: {
    largeStory: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="scss">
  .portfolio {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    border-bottom: 2px solid #DDD;
    @media (max-width: 599px) { grid-template-columns: repeat(1, 1fr); }
    &__story {
      display: flex;
      flex-direction: column;
      height: auto;
      &__img {
        align-self: flex-start;
        width: 100%;
        max-height: 550px;
        img {
          width: 100%;
        }
      }
      &__name {
        text-transform: uppercase;
        color: var(--color-grey);
        font: bold 0.94em/1.875em var(--default-font-family);
      }
      &__title {
        font-size: 1.875em;
        @media (max-width: 991px) {
          font-size: 1.5em;
        }
      }
      &__big {
        flex-direction: row;
      }
    }
  }
</style>
