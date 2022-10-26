<template>
  <v-container id="main">
    <PostView 
      name="Luigi" 
      userName="@luigi.dev"
      text="Hello World"
      likes=420
      retweets=69
      comments=13
      imgSrc="#"
    />
  </v-container>
</template>

<script>
  import PostView from '../components/Post.vue';
 
  export default {
    name: 'MainView',
    components: { PostView }
  }
</script>
