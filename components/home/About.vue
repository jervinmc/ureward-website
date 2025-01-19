<template>
    <div>
      <v-card color="white" class="d-flex align-center">
        <v-row class="px-16" align-self="center">
          <v-col :cols="page_orientation == 'isMobile' ? 12 : 4" align-self="center">
            <div>
              <div class="text-h2 py-5 secondary--text" >
                <b>IT Solutions</b>
              </div>
              <div class="text-h6 py-5">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              </div>
              <div class="py-5">
                <v-btn dark color="secondary" rounded="lg" height="50"  >Read More</v-btn>
              </div>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="pa-10" :cols="page_orientation == 'isMobile' ? 12 : 8" align-self="center">
            <v-img src="/images/about-image.jpg" fit="cover"  />
          </v-col>
        </v-row>
      </v-card>
    </div>
  </template>
  
  <script>
  
  export default {
    props:['page_orientation']
  };
  </script>
  
  <style>
  
  </style>