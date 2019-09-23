<template>
  <ul class="sm__links">
    <li class="sm__links__link"
        v-for="link in mediaLinks"
        :key="link.id">
      <a :href="link.url" target="_blank">
        <img
          :src="require(`@assets/images/icons/icon-${ link.src }.svg`)"
          :alt="link.src">
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      mediaLinks: [
        {
          id: 0,
          src: 'fb',
          url: 'https://www.facebook.com/DeptAgency/',
        },
        {
          id: 1,
          src: 'twitter',
          url: 'https://twitter.com/DeptAgency',
        },
        {
          id: 2,
          src: 'instagram',
          url: 'https://www.instagram.com/deptagency/',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .sm__links {
    display: flex;
    align-items: center;
    @media (max-width: 599px) {
      flex-direction: column;
    }
    &__link {
      padding: 0 13.5px;
      @media (max-width: 599px) {
        padding: 0;
      }
      &:last-of-type {
        padding-right: 0;
      }
    }
  }
</style>
