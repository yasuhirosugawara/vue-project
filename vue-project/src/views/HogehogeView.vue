<script setup>
import axios from 'axios'
</script>

<template>
  <main>
    <input type="text" :value="name" placeholder="name" v-on:input="console.log(this.name)">
    <input type="text" :value="email" placeholder="email">
    <button @click="send()">送信</button>
  </main>
</template>

<script>
export default {
  methods: {
    send() {
      axios.post('https://sample.novalumoapis.com/api/users', {
        name: this.name,
        email: this.email
      }).then((res) => {
        console.log('Success')
      }).catch(() => {
        console.error('Error')
      })
    }
  },
  data() {
    return {
      name: "",
      email: ""
    }
  }
}
</script>