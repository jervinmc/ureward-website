<template>
  <div>
    <v-card color="primary" height="600" class="d-flex align-center px-10">
      <v-row class="white--text px-16" align-self="center">
        <v-col class="pa-10" cols="6" align-self="center">
          <v-img src="/images/offer-image.jpg" />
        </v-col>
        <v-col cols="6" align-self="center">
              <v-row>
                <v-col cols="6" v-for="index in 4" align="center">
                  <v-card height="200px" color="white" class="d-flex align-center justify-center">
                    <div>
                      <div>
                        <v-icon size="60">
                          mdi-laptop
                        </v-icon>
                      </div>
                      <div class="text-h5">
                        <b>Development</b>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>

export default {};
</script>

<style></style>