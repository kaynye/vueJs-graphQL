<template>
  <div class="hello">
    <!-- <h1>{{ password }}</h1> -->
    

    <div class="flex-column">
    <div>
          
          <!-- <label for="login"> Nom d'utilisateur</label>  -->
          <ul id="example-1">
            <li v-for="user in users" :key="user.firstname">
              {{ user.firstname }}
            </li>
          </ul>
          <!-- <input type='text' name='login'> -->
    </div>

    </div>
  </div>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge'
import gql from 'graphql-tag'

export default {
  name: 'LoginPage',
  props: {
    msg: String,
    // password : String
  } ,
  apollo:{
    users: gql`query{
      users{
        id
        firstname
        lastname
        email
        createdAt
        class{
          name
        }
        
      }
    }`,
  },
    data () {
      return {
        // Initialize your apollo data
        users: [
          { id: 'Foo' },
          { id: 'Bar' }
        ]
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
