<template>
  <v-container id="main">
    <PostView v-for="(t, i) in tweets" :key="i"
      name=authors[i].name 
      userName=authors[i].username
      text=t.text
      likes=420
      retweets=69
      comments=13
      imgSrc="#"
    />
  </v-container>
</template>

<script>
  import PostView from '../components/Post.vue';
  import { getTweets } from '../../apiConnect.js';

  export default {
    name: 'MainView',
    components: { PostView },
    data() {
      return { 
        tweets: [],
        authors: [],
        errorHappend: false,
        errorMsg: ""
      }
    },
    mounted(){
      getTweets()
        .then(res => console.log(res))
        .catch(rej => console.error(rej));
    }
  }
</script>
