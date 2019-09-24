<template>
  <div>
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
  </ul>
  </div>
</template>

<script>
import StoryComponent from './StoryComponent';
import FeedbackComponent from './FeedbackComponent';

export default {
  components: {
    StoryComponent,
    FeedbackComponent,
  },
  data() {
    return {
      feedback: '<feedback-component />',
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
          name: 'Florensis',
          src: 'florensis',
          title: 'Rethinking the entire online ecosystem',
          isLarge: true,
        },
        {
          id: 5,
          name: 'Microsoft',
          title: 'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels',
          isText: true,
        },
        {
          id: 6,
          name: 'O’NEILL',
          title: 'Integrating existing content into O’Neill’s new e-commerce platform',
          isText: true,
        },
        {
          id: 7,
          src: 'lightning',
          name: 'Be Lighting',
          title: 'Delivering clarity on a global scale',
        },
        {
          id: 8,
          src: 'tui',
          name: 'TUI',
          title: 'Swipe to find your next holiday destination',
        },
        {
          id: 9,
          name: 'Bultins',
          title: 'Enhancing customer experience for personalised holiday planning using real time data',
          isText: true,
        },
        {
          id: 10,
          name: 'Florensis',
          src: 'florensis',
          title: 'Rethinking the entire online ecosystem',
          isLarge: true,
        },
        {
          id: 11,
          name: 'Vacanselect',
          title: 'Predicting booking behavior for holidays with smart data, voice search and machine learning',
          isText: true,
        },
        {
          id: 12,
          src: 'chocomel',
          name: 'Chocomel',
          title: 'A campaign for the limited edition letter packs',
        },
        {
          id: 13,
          src: 'jbl',
          name: 'JBL',
          title: 'Live like a champion with Jerome Booteng',
        },
        {
          id: 14,
          src: 'zalando',
          name: 'zalando',
          title: 'Innovative SEO and content strategy for Zalando',
        },
        {
          id: 15,
          src: 'koninklijke-bibliotheek',
          name: 'Koninklijke Bibliotheek',
          title: 'The search for the most influential book ever',
        },
        {
          id: 16,
          src: 'liberty-global',
          name: 'Liberty Global',
          title: 'Delivering complex commerce solutions',
        },
        {
          id: 17,
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
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 30px;
    border-bottom: 2px solid #DDD;
    @media (max-width: 599px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 47px;
    }
  }
</style>
