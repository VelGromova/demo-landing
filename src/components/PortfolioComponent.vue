<template>
  <ul class="portfolio">
    <li class="portfolio__story" v-for="story in portfolio" :key="story.id">
      <figure class="portfolio__story__img">
        <img :src="require(`@assets/images/${ story.src }.png`)"
             :alt="story.name">
      </figure>
      <span class="portfolio__story__name">{{ story.name }}</span>
      <span class="portfolio__story__title">{{ story.title }}</span>
      <cta-button class="cta-btn">View case</cta-button>
    </li>
  </ul>
</template>

<script>
import CtaButton from './ui/CtaButton';

export default {
  components: {
    CtaButton,
  },
  data() {
    return {
      portfolio: [
        {
          id: 0,
          src: 'bolcom',
          name: 'bol.com',
          title: 'A summer island in the Netherlands',
        },
        {
          id: 1,
          src: 'kempen',
          name: 'kempen',
          title: 'Not some average banking website',
        },
        {
          id: 2,
          src: 'philips',
          name: 'Philips',
          title: 'Beautiful design meets innovative technology',
        },
        {
          id: 3,
          src: 'gemeentemuseum',
          name: 'Gemeentemuseum',
          title: 'A 100 years of Mondriaan & De Stijl',
        },
        {
          id: 4,
          src: 'lightning',
          name: 'Be Lighting',
          title: 'Delivering clarity on a global scale',
        },
        {
          id: 5,
          src: 'tui',
          name: 'TUI',
          title: 'Swipe to find your next holiday destination',
        },
        {
          id: 6,
          src: 'chocomel',
          name: 'Chocomel',
          title: 'A campaign for the limited edition letter packs',
        },
        {
          id: 7,
          src: 'jbl',
          name: 'JBL',
          title: 'Live like a champion with Jerome Booteng',
        },
        {
          id: 8,
          src: 'zalando',
          name: 'zalando',
          title: 'Innovative SEO and content strategy for Zalando',
        },
        {
          id: 9,
          src: 'koninklijke-bibliotheek',
          name: 'Koninklijke Bibliotheek',
          title: 'The search for the most influential book ever',
        },
        {
          id: 10,
          src: 'liberty-global',
          name: 'Liberty Global',
          title: 'Delivering complex commerce solutions',
        },
        {
          id: 11,
          src: 'arla',
          name: 'Arla',
          title: 'Get some protein, buddy',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .portfolio {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    border-bottom: 2px solid #DDD;
    @media (max-width: 599px) {
      grid-template-columns: repeat(1, 1fr);
    }
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
    }
  }
</style>
