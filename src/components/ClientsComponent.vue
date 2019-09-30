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
               :alt="logo.name"
               loading="lazy">
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import clients from '@assets/data/clients.json';

export default {
  data() {
    return {
      description: clients.description,
      logos: clients.logos,
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
