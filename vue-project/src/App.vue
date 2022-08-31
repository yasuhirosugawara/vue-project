<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
<div>
  <RouterLink to="/">Home</RouterLink><br>
  <RouterLink to="/hoge">Hoge</RouterLink><br>
  <RouterLink to="/hoge2">Hoge2</RouterLink><br>
  <RouterLink to="/posts">posts</RouterLink><br>
  <RouterLink to="/posts2">posts2</RouterLink>
  <RouterView />
</div>
</template>

<script>
import axios from "axios"
export default{
  mounted(){
    axios.get('https://sample.novalumoapis.com/api/users')
  }
}
</script>