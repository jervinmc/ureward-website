<template>
  <v-app dark>
    <!-- is not logged in yet -->
    <!-- <v-app-bar color="white" align="center" fixed app>
      <div style="width: 100%;" align="center">
        <div style="width:300px">
          <v-row>
            <v-col>Home</v-col>
            <v-col>About</v-col>
            <v-col>Contact</v-col>
          </v-row>
        </div>
      </div>
    </v-app-bar> -->
    <v-main>
      <v-container fluid class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-footer padless>
      <v-card flat tile>
        <v-card-text>
          <v-btn v-for="icon in iconFooter" :key="icon" class="mx-4 secondary--text" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="black--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="secondary--text">
          <a href="https://www.freepik.com/vectors/claim">Claim vector created by pch.vector - www.freepik.com</a>
          {{ new Date().getFullYear() }} — <strong>R2M</strong>
        </v-card-text>
      </v-card>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  methods: {
    pushRoute(link) {
      window.location.href = `/${link}`;
    },
    goIndex() {
      window.location.href = "/";
    },
  },
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      iconFooter: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-linkedin",
        "mdi-instagram",
      ],
      items: [
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/dashboard",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Restaurant",
          to: "/restaurant",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
