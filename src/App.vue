<template>
 <v-app>
  <v-app-bar app
   color="blue darken-4"
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
       <v-icon color="blue-grey lighten-5" 
         dark>
         mdi-home
       </v-icon>
      </v-tab>
      <v-tab>
       <v-icon color="blue-grey lighten-5" 
         dark>
         mdi-magnify
        </v-icon>
      </v-tab>
      <v-tab>
       <v-icon color="blue-grey lighten-5" 
         dark>
         mdi-bell
       </v-icon>
      </v-tab>
      <v-tab>
       <v-icon color="blue-grey lighten-5" 
         dark>
         mdi-email
       </v-icon>
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
</style>
