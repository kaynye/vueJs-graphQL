<template>
  <div class="hello">
    <h1>{{ password }}</h1>

    <div class="flex-column">
    <div>
          <label for="login"> Nom d'utilisateur</label> 
          <input type='text' name='login'>
    </div>
    <div>
          <label for="password"> Password</label>  
          <input type='password' name='password'  > 
          
    </div>

    </div>
  </div>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge'
export default {
  name: 'LoginPage',
  props: {
    msg: String,
    // password : String
  }  
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
