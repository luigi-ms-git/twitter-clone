<template>
 <v-app>
  <v-app-bar app
   color="blue-grey darken-4"
   dark>
   <h1>Twitter Clone</h1>
  </v-app-bar>
  <v-main>
   <router-view/>
  </v-main>
  <v-footer elevation="6" 
    padless 
    fixed>
    <v-tabs centered 
      background-color="blue-grey darken-4"
      dark>
      <v-tab>
        <router-link to="/">
          <v-icon color="blue-grey lighten-5" dark>
            mdi-home
          </v-icon>
        </router-link>
      </v-tab>
      <v-tab>
        <router-link to="/explore">
          <v-icon color="blue-grey lighten-5" dark>
            mdi-magnify
          </v-icon>
        </router-link>
      </v-tab>
      <v-tab>
        <router-link to="/notifications">
          <v-icon color="blue-grey lighten-5" dark>
            mdi-bell
          </v-icon>
        </router-link>
      </v-tab>
      <v-tab>
        <router-link to="/messages">
          <v-icon color="blue-grey lighten-5" dark>
            mdi-email
          </v-icon>
        </router-link>
      </v-tab>
    </v-tabs>
  </v-footer>
</v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  })
};
</script>

<style>
h1 { font-size: 1.5rem; }

main { background-color: #263238; }

footer { background-color: #0D47A1; }

a { text-decoration: none; }
</style>
