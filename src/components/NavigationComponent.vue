<template>
  <nav class="nav"
       :class="{ row: isHorizontal, column: isVertical }">
    <router-link
      class="nav__link"
      v-for="routes in links"
      :key="routes.id"
      :to="`${routes.page}`">
      {{ routes.text }}
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
    align-items: flex-end;
    top: 10%;
    width: 100%;
    margin-top: 30px;
    .nav__link {
      display: block;
      width: max-content;
      font-size: 6.875em;
      line-height: 0.8em;
      mix-blend-mode: normal;
      padding-top: 13px;
      text-transform: uppercase;
      transition: 0.5s;
      @media (max-width: 599px) {
        font-size: 3.125em;
      }
      &:hover > .arrow {
        opacity: 1;
        top: 14px;
        left: 20px;
        transition: 0.5s;
        background: salmon;
      }
      &:hover:before {
        opacity: 1;
        border-left-color: rgba(255, 255, 255, 0.5);
        transition: 0.5s;
      }
      .border {
        position: absolute;
        background: rgba(163, 163, 163, 0.5);
        width: 100%;
        height: 1px;
        right: 0;
        display: block;
      }
      &:hover > .border {
        background: rgba(163, 163, 163, 1);
      }
      &:before {
        display: inline-block;
        content: '';
        top: -20px;
        width: 0;
        height: 0;
        border: {
          top: 14px solid transparent;
          bottom: 14px solid transparent;
          left: 14px solid var(--color-white);
        }
        position: relative;
        opacity: 0;
        transition: 0.5s;
      }
    }
    .router-link-active {
      &:before {
        opacity: 1;
      }
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
      line-height: 2em;
      text-transform: uppercase;
      @media (max-width: 768px) {
        padding: 0 13.5px 0 0;
      }
      @media (max-width: 599px) {
        font-size: 2em;
        line-height: inherit;
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
