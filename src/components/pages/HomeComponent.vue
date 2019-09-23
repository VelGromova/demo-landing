<template>
  <div>
    <header-component />
    <filter-component />
    <grid-component>
      <div class="container">
        <portfolio-component />
      </div>
    </grid-component>
    <feedback-component />
    <clients-component />
    <contact-form />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '../layout/HeaderComponent';
import FilterComponent from '../FilterComponent';
import PortfolioComponent from '../PortfolioComponent';
import GridComponent from '../layout/GridComponent';
import FeedbackComponent from '../FeedbackComponent';
import ClientsComponent from '../ClientsComponent';
import ContactForm from '../ContactForm';
import FooterComponent from '../layout/FooterComponent';

export default {
  components: {
    HeaderComponent,
    FilterComponent,
    GridComponent,
    PortfolioComponent,
    FeedbackComponent,
    ClientsComponent,
    ContactForm,
    FooterComponent,
  },
};
</script>

<style>

</style>
