<script setup>
    import axios from 'axios'
    </script>
    
    <template>
      <main>
        <ul>
          <li v-for="todo in todos">{{ todo.title }}</li>
        </ul>
      </main>
    </template>
    
    <script>
    export default {
      mounted() {
        axios.get('https://sample.novalumoapis.com/api/todos')
        .then((res) => {this.todos = res.data})
      },
      data() {
        return {
          todos: []
        }
      }
    }
    </script>