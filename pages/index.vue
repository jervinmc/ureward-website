<template>
  <div>
    <hero />
    <div>
      <Services />
    </div>
    <div>
      <Goals />
    </div>
    <div>
      <About />
    </div>
    <div>
      <Offers />
    </div>
    <div>
      <Design />
    </div>
    <div>
      <WebApplication />
    </div>
    <div>
      <Partnership />
    </div>
    <div>
      <Contact />
    </div>
  </div>
</template>

<script>

import About from '../components/home/About.vue';
import Goals from '../components/home/Goals.vue';
import Hero from '../components/home/Hero.vue'
import Services from '../components/home/Services.vue';
import Offers from '../components/home/Offers.vue';
import Design from '../components/home/Design.vue';
import WebApplication from '../components/home/WebApplication.vue';
import Partnership from '../components/home/Partnership.vue';
import Contact from '../components/home/Contact.vue';

export default {
  components: { Hero, Services, Goals, About, Offers, Design, WebApplication, Partnership, Contact },

}
</script>

<style></style>