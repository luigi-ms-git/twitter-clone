<template>
	<div class="content">
		<figure>
			<img class="user-img" src="#" alt="user photo"/>
		</figure>
		<header>
			<h2 class="name">{{ name }}</h2>
			<h3 class="user-name">{{ userName }}</h3>
		</header>
		<p class="text">{{ text }}</p>
		<div class="buttons">
			<button class="comment">{{ comments }}</button>
			<button class="retweet">{{ retweets }}</button>
			<button class="like">{{ likes }}</button>
			<button class="share">Compartilhar</button>
		</div>
	</div>
</template>

<script>
export default {
  name: 'PostComponent',
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
}

.content {
	display: grid;
	grid-template-columns: 0.6fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 2fr 1fr;
	grid-template-areas:
		"userImg header header ."
		"userImg postText postText postText"
		"userImg buttons buttons buttons";
	align-items: center;
	column-gap: 1vw;
	padding-left: 2vh;
	padding-right: 2vh;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	height: 15vh;
}

header {
	grid-area: header;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

figure {
	grid-area: userImg;
	height: 100%;
	display: flex;
	align-items: center;
}

h2, h3 { font-size: 0.85rem; }

.text {
	grid-area: postText;
	font-size: 0.9rem;
}

.buttons {
	grid-area: buttons;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

button { 
	padding: 1%;
	border: none;
}
</style>
