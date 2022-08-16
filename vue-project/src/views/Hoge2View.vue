<script setup>
import axios from 'axios'
</script>

<template>
  <main>
    <input type="text" v-model="name" placeholder="name" v-on:input="console.log(this.name)"><br>
    <input type="text" v-model="email" placeholder="email"><br>
    <button @click="send()">送信</button>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        email: "",
      };
    },
    methods: {
      send: function () {
        axios
          .post('https://sample.novalumoapis.com/api/users', {
            name: this.name,
            email: this.email,
          })
          .then((res) => {
            console.log(res);
            this.posts = res.data.posts;
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
  };
// export default {
//     data() {
//     return {
//       name: "",
//       email: ""
//     }
//   },
//   methods: {
//     send() {
//       axios.post('https://sample.novalumoapis.com/api/users', {
//         name: this.name,
//         email: this.email
//       }).then((res) => {
//         console.log('Success')
//       }).catch(() => {
//         console.error('Error')
//       })
//     }
//   }
// }
</script>