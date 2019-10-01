<template>
  <div>
    <header-component />
    <portfolio-component />
    <clients-component />
    <contact-form />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '../layout/HeaderComponent';
import PortfolioComponent from '../PortfolioComponent';
import FeedbackComponent from '../FeedbackComponent';
import ClientsComponent from '../ClientsComponent';
import ContactForm from '../ContactForm';
import FooterComponent from '../layout/FooterComponent';

export default {
  components: {
    HeaderComponent,
    PortfolioComponent,
    FeedbackComponent,
    ClientsComponent,
    ContactForm,
    FooterComponent,
  },
};
</script>
