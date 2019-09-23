<template>
  <div class="footer-layout">
    <footer class="footer">
      <div class="container">
        <div class="footer__content">
          <router-link to="/" class="footer__content__logo">
            <img src="@assets/images/DEPT-logo.svg" alt="DEPT">
          </router-link>
          <router-view/>
          <navigation-component is-horizontal="true"/>
          <social-media-component />
        </div>
        <hr class="footer__divider">
        <ul class="footer__side-info">
          <li>
            <small>Chamber of Commerce: 63464101</small>
          </li>
          <li>
            <small>VAT: NL 8552.47.502.B01</small>
          </li>
          <li>
            <small>
              <router-link to="/terms-conditions">
                Terms and conditions
              </router-link>
            </small>
          </li>
          <li class="copyright-copy">
            <small>&#169; 2018 Dept Agency</small>
          </li>
        </ul>
      </div>
    </footer>
    <a class="top-btn" @click="scrollToTop">Top</a>
  </div>
</template>

<script>
import NavigationComponent from '../NavigationComponent';
import SocialMediaComponent from '../SocialMediaComponent';

export default {
  components: {
    NavigationComponent,
    SocialMediaComponent,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};

</script>

<style lang="scss">
.footer-layout {
  display: flex;
  @media (max-width: 991px) {
    display: inherit;
  }
  .top-btn {
    position: relative;
    align-self: center;
    margin: 0 auto;
    text-align: center;
    color: var(--color-blue);
    font-size: 22px;
    line-height: 32px;
    width: 30px;
    @media (max-width: 991px) {
      display: none;
    }
    &:after {
      content: '\2191';
      width: 100%;
      left: 0;
      position: absolute;
      top: -20px;
    }
  }
}
.footer {
  width: calc(100% - 120px);
  background-color: var(--color-black);
  color: var(--color-white);
  padding: 100px 0;
  @media (max-width: 991px) { width: 100%; }
  @media (max-width: 768px) { padding: 60px 0 40px; }
  &__content {
    position: relative;
    display: flex;
    justify-content: space-between;
    &__logo {
      @media (max-width: 768px) { display: none }
    }
  }
  &__divider {
    border-top: #3E3E3E;
    margin: 22px 0 56px;
    @media (max-width: 768px) { margin: 40px 0; }
  }
  &__side-info {
    display: flex;
    justify-content: flex-end;
    font: normal 13px/1 var(--default-font-family);
    color: #808080;
    user-select: none;
    @media (max-width: 599px) {
      flex-direction: column;
    }
    li {
      margin-left: 30px;
      @media (max-width: 599px) {
        margin-left: 0;
      }
    }
    .copyright-copy {
      margin-left: 60px;
      @media (max-width: 599px) {
        margin-left: 0;
        margin-top: 25px;
      }
    }
  }
}
</style>
