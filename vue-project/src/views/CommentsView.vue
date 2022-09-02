<script setup>
    import axios from 'axios'
    </script>
    
    <template>
      <main>
        <ul>
          <li v-for="comment in comments">{{ comment.name }}</li>
          <li v-for="comment in comments">{{ comment.email }}</li>
        </ul>
      </main>
    </template>
    
    <script>
    export default {
      mounted() {
        axios.get('https://sample.novalumoapis.com/api/comments')
        .then((res) => {this.comments = res.data})
      },
      data() {
        return {
            comments: []
        }
      }
    }
    </script>