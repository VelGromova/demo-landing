<template>
  <div class="container">
    <quote-ui>
      <span slot="quoteReview">{{ review }}</span>
      <span slot="signature">
          {{ author.name }} – {{ author.position }}, {{ author.company }}
        </span>
    </quote-ui>
  </div>
</template>

<script>
import feedback from '@assets/data/feedback.json';
import QuoteUi from './ui/QuoteUi';

export default {
  components: { QuoteUi },
  data() {
    return {
      review: feedback.review,
      author: feedback.author,
    };
  },
};
</script>
