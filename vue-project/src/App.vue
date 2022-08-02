<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
<div>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/hoge">Hoge</RouterLink>
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