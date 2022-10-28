<template>
 <v-container class="content">
  <v-row>
   <v-col cols="2">
		<v-avatar size="55">
     <v-img :src="imgSrc" :alt="userName+' profile photo'"></v-img>
    </v-avatar>
   </v-col>
   <v-col cols="10">
		<header>
     <h2 class="name">{{ name }}</h2>
     <h3 class="user-name">@{{ userName.toLowerCase() }}</h3>
    </header>
    <p class="text-md-body-1 text-no-wrap">{{ text }}</p>
    <div class="buttons">
      <v-btn small 
        dark  
        icon
        class="comment">
       <v-icon color="blue-grey lighten-5" 
         dark>
         mdi-comment-outline
       </v-icon>
      {{ comments }}
     </v-btn>
     <v-btn small 
       dark 
       icon
       class="retweet">
       <v-icon color="blue-grey lighten-5" 
         dark>
         mdi-repeat-variant
       </v-icon>
      {{ retweets }}
     </v-btn>
     <v-btn small 
       dark 
       icon
       class="like">
       <v-icon color="blue-grey lighten-5" 
         dark>
         mdi-heart-outline
       </v-icon>
      {{ likes }}
     </v-btn>
     <v-btn small 
       dark 
       icon
       class="share">
       <v-icon color="blue-grey lighten-5" 
         dark>
         mdi-share-variant-outline
       </v-icon>
     </v-btn>
    </div>
   </v-col>
  </v-row>
  <v-divider id="divider" dark></v-divider>
</v-container>
</template>

<script>
export default {
 name: 'PostView',
 props: {
   imgSrc: String,
   name: String,
   userName: String,
   text: String,
   likes: Number,
   retweets: Number,
   comments: Number
 }
}
</script>

<style scoped>
* {
	margin: 0;
  padding: 0;
  font-size: 0.85rem;
}

.content {
 margin-top: 2vh;
 margin-bottom: 2vh;
 color: #ECEFF1;
}

header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.avatar {
	display: flex;
  align-items: center;
  justify-content: center;
}

p { margin-top: 3%; }

.buttons {
 display: flex;
 justify-content: space-between;
}

.buttons * { 
	padding: 1%;
  border: none;
  color: #ECEFF1;
}

#divider { margin-top: 5%; }
</style>
