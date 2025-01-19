<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
        <v-sheet class="d-flex justify-center align-center" align="cemter" height="80vh"> 
             <v-img src="/images/error-vector.jpg" height="450" width="200"></v-img>
        </v-sheet>
         <div align="center">
              <v-btn outlined color="secondary" @click="$router.go(-1)">Go Back</v-btn>
             </div>
    </h1>
    <h1 v-else>
      
    </h1>
    <NuxtLink to="/">
     
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
