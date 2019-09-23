<template>
  <nav class="nav"
       :class="{ row: isHorizontal, column: isVertical }">
    <router-link
      class="nav__link"
      v-for="routes in links"
      :key="routes.id"
      :to="`${routes.page}`">
      {{routes.text}}
      <span class="border"></span>
    </router-link>
  </nav>
</template>

<script>
export default {
  props: {
    isVertical: true,
    isHorizontal: true,
  },
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'work',
          page: '/work',
        },
        {
          id: 2,
          text: 'service',
          page: '/service',
        },
        {
          id: 3,
          text: 'stories',
          page: '/stories',
        },
        {
          id: 4,
          text: 'about',
          page: '/about',
        },
        {
          id: 5,
          text: 'careers',
          page: '/careers',
        },
        {
          id: 6,
          text: 'contact',
          page: '/contact',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .column {
    position: relative;
    display: flex;
    flex-direction: column;
    top: 10%;
    width: 100%;
    text-align: right;
    margin-top: 30px;
    .nav__link {
      font-size: 6.875em;
      line-height: 0.8em;
      border-bottom: 1px solid rgba(163, 163, 163, 0.5);
      mix-blend-mode: normal;
      padding-top: 13px;
      text-transform: uppercase;
      transition: 0.5s;
      @media (max-width: 599px) {
        font-size: 3.125em;
      }
      &:hover {
        border-bottom: 2px solid rgba(163, 163, 163, 1);
      }
    }
    .router-link-active{
      background: red;
      transition: 0.5s;
    }
  }
  .row {
    display: flex;
    @media (max-width: 599px) {
      flex-direction: column;
    }
    .nav__link {
      position: relative;
      padding: 0 13.5px;
      font-size: 1.125em;
      line-height: 2rem;
      text-transform: uppercase;
      @media (max-width: 768px) {
        padding: 0 13.5px 0 0;
      }
      & > .border {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--color-white);
      }
      &:hover > .border {
        margin-left: 13.5px;
        width: calc(100% - 27px);
        transition: 0.3s;
      }
    }
  }
</style>
