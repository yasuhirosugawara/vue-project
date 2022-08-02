<script setup>
import axios from 'axios'
</script>

<template>
  <main>
    <ul>
      <li v-for="user in users">{{ user.name }}</li>
    </ul>
  </main>
</template>

<script>
export default {
  mounted() {
    axios.get('https://sample.novalumoapis.com/api/users').then((res) => {
      this.users = res.data
    })
  },
  data() {
    return {
      users: []
    }
  }
}
</script>