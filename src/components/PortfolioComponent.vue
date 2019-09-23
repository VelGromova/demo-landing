<template>
  <ul class="portfolio">
    <story-component
      v-for="story in portfolio"
      :key="story.id"
      :story-src="story.src"
      :story-name="story.name"
      :story-title="story.title"
    ></story-component>
  </ul>
</template>

<script>
import StoryComponent from './StoryComponent';

export default {
  components: {
    StoryComponent,
  },
  props: {
    largeStory: {
      type: Boolean,
      required: false,
    },
    storySrc: '',
    storyName: '',
    storyTitle: '',
  },
  data() {
    return {
      portfolio: [
        {
          id: 0,
          src: 'bolcom',
          name: 'bol.com',
          title: 'A summer island in the Netherlands',
          largeStory: true,
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

</style>
