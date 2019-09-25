<template>
  <div>
    <header-component />
    <filter-component />
    <portfolio-component />
    <clients-component />
    <contact-form />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '../layout/HeaderComponent';
import FilterComponent from '../FilterComponent';
import PortfolioComponent from '../PortfolioComponent';
import FeedbackComponent from '../FeedbackComponent';
import ClientsComponent from '../ClientsComponent';
import ContactForm from '../ContactForm';
import FooterComponent from '../layout/FooterComponent';

export default {
  components: {
    HeaderComponent,
    FilterComponent,
    PortfolioComponent,
    FeedbackComponent,
    ClientsComponent,
    ContactForm,
    FooterComponent,
  },
};
</script>
