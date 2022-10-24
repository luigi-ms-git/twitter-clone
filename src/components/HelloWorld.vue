<template>
 <v-container>
  <PostView />
  <v-divider></v-divider>
  </v-container>
</template>

<script>
  import PostView from './Post.vue';
 
  export default {
    name: 'HelloWorld',
    data: () => ({
    }),
    components: {
     PostView
    }
  }
</script>
