<template>
 <v-container class="content">
  <v-row>
   <v-col cols="3">
		<figure>
     <v-img class="user-img" 
      src="#" 
      alt="user photo"></v-img>
    </figure>
   </v-col>
   <v-col cols="9">
		<header>
     <h2 class="name">{{ name }}</h2>
     <h3 class="user-name">{{ userName }}</h3>
    </header>
    <p class="text-md-body-1 text-no-wrap">{{ text }}</p>
    <div class="buttons">
     <v-btn small class="comment">
      {{ comments }}
     </v-btn>
     <v-btn small class="retweet">
      {{ retweets }}
     </v-btn>
     <v-btn small class="like">
      {{ likes }}
     </v-btn>
     <v-btn small class="share">
      0
     </v-btn>
    </div>
   </v-col>
  </v-row>
 </v-container>
</template>

<script>
export default {
 name: 'PostView',
 data() {
  return {
   name: "Fulano",
   userName: "@fulano69",
   text: "Lorem ipsum",
   likes: 0,
   retweets: 0,
   comments: 0
  }
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
}

header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

figure {
  height: 100%;
	display: flex;
  align-items: center;
  margin-right: 2vw;
}

.user-img {
  border: 1px solid black;
}

p {
 margin-top: 3%;
}

.buttons {
 display: flex;
 justify-content: space-between;
}

.buttons * { 
	padding: 1%;
	border: none;
}
</style>
