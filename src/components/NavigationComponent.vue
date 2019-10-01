<template>
  <nav class="nav"
       :class="{ row: isHorizontal, column: isVertical }">
    <router-link
      class="nav__link"
      v-for="(routes, index) in links"
      :key="index"
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
          text: 'work',
          page: '/work',
        },
        {
          text: 'service',
          page: '/service',
        },
        {
          text: 'stories',
          page: '/stories',
        },
        {
          text: 'about',
          page: '/about',
        },
        {
          text: 'careers',
          page: '/careers',
        },
        {
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
    &:hover {
      .nav__link {
        opacity: 0.5;
      }
      .router-link-active {
        opacity: 1;
      }
    }
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
        @media (max-width: 599px) {
          top: -5px;
          border: {
            top: 9px solid transparent;
            bottom: 9px solid transparent;
            left: 9px solid var(--color-white);
          }
        }
      }
      &:hover {
        opacity: 1;
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
