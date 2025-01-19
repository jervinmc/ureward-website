<template>
  <div>
    <hero :page_orientation="this.page_orientation" />
    <div>
      <Services :page_orientation="this.page_orientation" />
    </div>
    <div>
      <Goals :page_orientation="this.page_orientation"  />
    </div>
    <div>
      <About :page_orientation="this.page_orientation"  />
    </div>
    <div>
      <Offers :page_orientation="this.page_orientation"  />
    </div>
    <div>
      <Design :page_orientation="this.page_orientation"  />
    </div>
    <div>
      <WebApplication :page_orientation="this.page_orientation"  />
    </div>
    <div>
      <Partnership :page_orientation="this.page_orientation"  />
    </div>
    <div>
      <Contact :page_orientation="this.page_orientation"  />
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
  created(){
    if(this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs) this.page_orientation = 'isMobile'
    else if(this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl || this.$vuetify.breakpoint.md ) this.page_orientation = 'isDesktop'
  },
  data(){
    return{
      page_orientation:''
    }
  }
}
</script>

<style></style>