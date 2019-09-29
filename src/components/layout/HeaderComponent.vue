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
      position: relative;
      height: calc(100vh - 20vh);
      @media (max-width: 768px) { height: calc(100vh - 43vh); }
      h1 {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      .btn-main {
        position: absolute;
        right: 0;
        bottom: 0;
        @media (max-width: 599px) {
          width: 100%;
        }
      }
    }
  }
</style>
