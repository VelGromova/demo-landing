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
import QuoteUi from './ui/QuoteUi';

export default {
  components: { QuoteUi },
  data() {
    return {
      review: '“Dept helped us tell our story through a bold new identity and a robust online experience.\n' +
      'To the tune of 60% growth in online bookings in just one month.”',
      author: {
        name: 'Matthijs ten Brink',
        position: 'CEO',
        company: 'Transavia',
      },
    };
  },
};
</script>
