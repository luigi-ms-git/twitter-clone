<template>
  <v-container id="main">
    <PostView v-for="t in tweets" :key="t.id"
      :name="t.owner.firstName"
      :userName="t.owner.lastName"
      :text="t.text"
      :likes=t.likes
      :retweets="Math.round(t.likes / 2)"
      :comments="Math.round(t.likes + 7)"
      :imgSrc="t.owner.picture"
    />
    <p v-if="errorHappened">{{ errorMsg }}</p> 
  </v-container>
</template>

<script>
  import PostView from '../components/Post.vue';
  import axios from 'axios';

  export default {
    name: 'MainView',
    components: { PostView },
    data() {
      return { 
        tweets: [],
        errorHappened: false,
        errorMsg: "",
        cacheStore: window.localStorage
      }
    },
    methods: {
      saveOnCache(res){
        res.forEach(post => {
          this.cacheStore.setItem(post.id, JSON.stringify(post));
        });
      }
    },
    created(){
      axios.get("https://dummyapi.io/data/v1/post?limit=10", {
        headers: { 'app-id': "6355d8554657e021295c3329" }
      })
      .then(res => this.saveOnCache(res.data.data))
      .catch(rej => {
        this.errorHappened = true;
        this.errorMsg = rej;
      });
    },
    mounted(){
     console.log(Object.keys(this.cacheStore));
    }
  }
</script>
