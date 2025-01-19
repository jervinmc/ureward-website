<template>
  <div>
    <div>
        <hero-contact />
    </div>
    <contact-content />
  </div>
</template>

<script>
import ContactContent from '../../components/contact-us/ContactContent.vue'
import HeroContact from '../../components/contact-us/HeroContact.vue'
export default {
  components: { ContactContent, HeroContact },

}
</script>

<style>

</style>