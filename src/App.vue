<template>
  <div id="app">
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item>Home</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item>EN</b-dropdown-item>
        <b-dropdown-item>ES</b-dropdown-item>
        <b-dropdown-item>RU</b-dropdown-item>
        <b-dropdown-item>FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item to="/users">
            Mes Users
        </b-dropdown-item>
        <b-dropdown-item to="/createUser" >
            Creer un utiisateur
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>

    
   <router-view></router-view>

  </div>
</template>

<script>
// import ApolloExample from './components/LoginPage.vue'
// import LoginPage from './components/LoginPage.vue'

export default {
  name: 'App',
  components: {
    // LoginPage
  }
}
</script>

<style>

</style>
