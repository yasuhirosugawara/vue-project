<script setup>
import axios from 'axios'
</script>

<template>
  <main>
    <ul>
      <li v-for="post in posts">{{ post.title }}</li>
    </ul>
  </main>
</template>

<script>
export default {
  mounted() {
    axios.get('https://sample.novalumoapis.com/api/posts')
    .then((res) => {this.posts = res.data})
  },
  data() {
    return {
      posts: []
    }
  }
}
</script>