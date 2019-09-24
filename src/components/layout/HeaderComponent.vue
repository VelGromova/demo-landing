<template>
  <header class="header">
    <header-menu />
    <div class="container">
      <div class="header__layout">
        <h1>Work</h1>
        <main-button class="btn__main">
          View Case
        </main-button>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderMenu from '../HeaderMenu';
import MainButton from '../ui/MainButton';

export default {
  components: {
    MainButton,
    HeaderMenu,
  },
};

</script>

<style lang="scss" scoped>
  .header {
    position: relative;
    background: url('../../assets/images/header-video.png') center no-repeat/cover;
    height: 94vh;
    margin: 20px;
    @media (max-width: 768px) {
      height: 65vh;
      margin: 10px;
    }
    @media (max-width: 599px) {
      height: 48vh;
      margin: 0;
    }
    &__layout {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: calc(100vh - 25vh);
      @media (max-width: 768px) { height: calc(100vh - 55vh); }
      @media (max-width: 768px) { height: calc(100vh - 53vh); }
      .btn-main {
        display: inline-block;
        align-self: flex-end;
        @media (max-width: 599px) {
          align-self: inherit;
        }
      }
    }
  }
</style>
