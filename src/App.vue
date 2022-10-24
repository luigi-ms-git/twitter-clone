<template>
 <v-app>
  <v-app-bar app
   color="primary"
   dark>
  </v-app-bar>
  <v-main>
   <router-view/>
  </v-main>
  <v-footer>
   <v-tabs>
    <v-tab>Home</v-tab>
    <v-tab>Explore</v-tab>
    <v-tab>Notifications</v-tab>
   </v-tabs>
  </v-footer>
 </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
