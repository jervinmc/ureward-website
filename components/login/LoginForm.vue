<template>
  <div
    :style="!$vuetify.breakpoint.xs ? 'height: 500px' : ''"
    class="centralized-items d-flex justify-center align-center"
  >
    <v-form
      v-model="isValid"
      ref="form"
      lazy-validation
      @submit.prevent="submitHandler"
    >
      <v-row>
        <v-col cols="12" md="6" lg="6" xl="6" >
          <v-card  class="rounded-xl pa-16">
            <div
              style="background-color: #ef5777; color: white"
              align="start"
              class="pa-5"
            >
              Login Now
            </div>
            <div class="pa-5" align="start">
              <v-row>
                <v-col>
                  <div>Email</div>
                  <div>
                    <v-text-field
                      :rules="standardRules"
                      outlined
                      v-model="users.email"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div>Password</div>
                  <div>
                    <v-text-field
                      :rules="standardRules"
                      outlined
                      v-model="users.password"
                      type="password"
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
              <div align="center">
                <v-btn
                  depressed
                  color="secondary"
                  dark
                  type="submit"
                  :loading="isLoaded"
                >
                  Login
                </v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" xl="6" md="6">
          <div align="center">
            <v-img
              src="/images/loginVector.jpg"
              height="400"
              width="600"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import validations from "@/utils/validations";
export default {
  auth: false,
  data() {
    return {
      isLoaded: false,
      ...validations,
      isValid: false,
      users: {
        email: "",
        password: "",
      },
    };
  },
  created() {
    console.log(this.$auth);
  },
  methods: {
    async submitHandler() {
      this.isLoaded = true;
      try {
        const response = await this.$auth.loginWith("local", {
          data: this.users,
        });
      } catch (error) {
        alert('Wrong credentials')
        this.isLoaded = false;
      }
    },
  },
};
</script>

<style>
</style>