<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
<div></div>
</template>

<script>
import axios from "axios"
export default{
  mounted(){
    axios.get('https://sample.novalumoapis.com/api/users')
  }
}
</script>