<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
<div>
  <RouterLink to="/">Home</RouterLink><br>
  <p><RouterLink to="/hoge">Hoge</RouterLink>　
  <RouterLink to="/hoge2">Hoge2</RouterLink></p>
  <p><RouterLink to="/posts">posts</RouterLink>　
  <RouterLink to="/posts2">posts2</RouterLink></p>
  <p><RouterLink to="/comments">comments</RouterLink>　
  <RouterLink to="/comments2">comments2</RouterLink></p>
  <p><RouterLink to="/todos">todos</RouterLink>　
    <RouterLink to="/todos2">todos2</RouterLink></p>
  <RouterView />
</div>
</template>

<!-- <script>
import axios from "axios"
export default{
  mounted(){
    axios.get('https://sample.novalumoapis.com/api/users')
  }
}
</script> -->