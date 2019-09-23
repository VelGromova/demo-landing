<template>
  <section class="quote section-padding">
    <blockquote class="quote__copy">
      <slot name="quoteReview"/>
    </blockquote>
    <span class="quote__signature">
      <slot name="signature" />
    </span>
  </section>
</template>

<style lang="scss">
  .quote {
    margin: 0 auto;
    width: 64%;
    @media (max-width: 599px) {
      width: 100%;
    }
    &__copy {
      font-size: 36px;
      line-height: 46px;
     }
    &__signature {
      display: inline-block;
      text-transform: uppercase;
      margin-top: 18px;
      font: bold 0.81em/1.875em var(--default-font-family);
    }
  }
</style>
