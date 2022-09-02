<script setup>
    import axios from 'axios'
    </script>
    
    <template>
      <main>
        <input type="text" v-model="post_id" placeholder="post_id"><br>
        <input type="text" v-model="name" placeholder="name"><br>
        <input type="text" v-model="email" placeholder="email"><br>
        <input type="text" v-model="body" placeholder="body"><br>
        <button @click="send()">送信</button>
      </main>
    </template>
    
    <script>
      export default {
        data() {
          return {
            post_id: "",
            name: "",
            email: "",
            body: "",
          };
        },
        methods: {
          send: function () {
            axios
              .post('https://sample.novalumoapis.com/api/comments', {
                post_id: this.post_id,
                name: this.name,
                email: this.email,
                body: this.body,
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
    </script>