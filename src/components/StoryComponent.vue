<template>
  <li
    :class="{ story__big : isLarge, story__text: isText }"
    class="story"
  >
    <figure v-if="!isText" class="story__img">
      <a href="#">
        <img :src="require(`@assets/images/${ storySrc }.png`)"
             :alt="storyName">
      </a>
    </figure>
    <span class="story__name">{{ storyName }}</span>
    <span class="story__title">{{ storyTitle }}</span>
    <cta-button class="cta-btn">View case</cta-button>
    <slot></slot>
  </li>
</template>

<script>
import CtaButton from './ui/CtaButton';
import FeedbackComponent from './FeedbackComponent';

export default {
  components: {
    FeedbackComponent,
    CtaButton,
  },
  props: {
    storySrc: '',
    storyName: '',
    storyTitle: '',
    isLarge: true,
    isText: false,
  },
};
</script>

<style lang="scss">
  .story {
    display: flex;
    flex-direction: column;
    grid-column: auto / span 4;
    grid-row: auto / span 4;
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
      grid-column: auto / span 5;
      grid-row: auto / span 5;
      .story__name {
        text-transform: capitalize;
        @media (max-width: 599px) {
          text-transform: uppercase;
        }
      }
    }
    &__text {
      padding-top: 18px;
      grid-column: auto / span 3;
      grid-row: auto / span 2;
      border-top: 1px solid #DDDDDD;
      .story__title {
        font-size: 1.5em;
      }
    }
    @media (max-width: 599px) {
      grid-column: auto / span 8;
      grid-row: auto / span 1;
    }
  }
</style>
