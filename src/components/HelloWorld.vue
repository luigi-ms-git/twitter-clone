<template>
 <v-container>
  <PostView />
  <v-divider dark></v-divider>
  </v-container>
</template>

<script>
  import PostView from './Post.vue';
 
  export default {
    name: 'MainPage',
    data: () => ({}),
    components: {
     PostView
    }
  }
</script>

<style scoped>
</style>
