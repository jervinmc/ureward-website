<template>
  <div>
      <login-form />
  </div>
</template>

<script>
import LoginForm from '../../components/login/LoginForm.vue'
export default {
  head () {
    return {
      title: 'Login',
    }
  },
  components: { LoginForm },

}
</script>

<style>

</style>