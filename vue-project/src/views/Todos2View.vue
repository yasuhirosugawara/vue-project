<script setup>
    import axios from 'axios'
    </script>
    
    <template>
      <main>
        <input type="text" v-model="user_id" placeholder="user_id"><br>
        <input type="text" v-model="title" placeholder="title"><br>
        <input type="text" v-model="completed" placeholder="completed"><br>
        <button @click="send()">送信</button>
      </main>
    </template>
    
    <script>
      export default {
        data() {
          return {
            user_id: "",
            title: "",
            completed: "",
          };
        },
        methods: {
          send: function () {
            axios
              .post('https://sample.novalumoapis.com/api/todos', {
                user_id: this.user_id,
                title: this.title,
                completed: this.completed,
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