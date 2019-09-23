<template>
  <section class="clients section-padding">
    <div class="container">
      <article>
        <h2 class="clients__title">clients</h2>
        <p class="clients__description">{{ description }}</p>
      </article>
      <ul class="clients__logos">
        <li v-for="logo in logos" :key="logo.id">
          <img class="logo"
               :src="require(`@assets/images/logos/${logo.name}_logo_zwart.svg`)"
               :alt="logo.name">
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      description: 'We value a great working relationship with our clients above all else.' +
      'It’s why they often come to our parties. It’s also why we’re able to challenge and inspire ' +
      'them to reach for the stars.',
      logos: [
        { id: 0, name: 'ABN' },
        { id: 1, name: 'Adidas' },
        { id: 2, name: 'Microsoft' },
        { id: 3, name: 'Mona' },
        { id: 4, name: 'Nivea' },
        { id: 5, name: 'NN' },
        { id: 6, name: 'Oxxio' },
        { id: 7, name: 'Pathe' },
        { id: 8, name: 'Tomtom' },
        { id: 9, name: 'Transavia' },
        { id: 10, name: 'Triumph' },
        { id: 11, name: 'Unilever' },
        { id: 12, name: 'Walibi' },
        { id: 13, name: 'Zalando' },
        { id: 14, name: 'Ziggo' },
      ],
    };
  },
  methods: {
    onResize() {
      if (window.innerWidth <= 599) {
        this.logos = this.logos.slice(0, 6);
      }
    },
  },
  created() {
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style lang="scss">
  .clients {
    background: #F3F6F6;
    text-align: center;
    &__description {
      display: inline-block;
      font: normal 1.06em/27px var(--default-font-family);
      padding: 18px 0 80px;
      width: 50%;
      @media (max-width: 991px) {
        padding-bottom: 60px;
        width: 70%;
      }
      @media (max-width: 599px) {
        width: 100%;
      }
    }
    &__logos {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      img {
        @media (max-width: 991px) {
          width: 200px;
        }
        @media (max-width: 599px) {
          width: 160px;
        }
      }
    }
  }
</style>
