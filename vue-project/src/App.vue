<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
<div>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/hoge">Hoge</RouterLink>
  <RouterLink to="/hoge2">Hoge2</RouterLink>
  <RouterLink to="/posts">posts</RouterLink>
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