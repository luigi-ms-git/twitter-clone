<template>
	<nav>
		<button>Menu</button>
		<img src="" alt="twitter logo"/>
	</nav>
	<main>
		<PostComponent/>
	</main>
</template>

<script>
import PostComponent from './components/Post.vue'

export default {
  name: 'App',
  components: { PostComponent }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');

#app {
  font-family: "Montserrat", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
	
}

nav {
	display: flex;
	justify-content: space-between;
	margin-bottom: 2vh;
}
</style>
