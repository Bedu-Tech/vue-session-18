<template>
  <div class="login-view text-center">
    <div v-if="errors.length > 0" class="alert alert-danger" role="alert">
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{error}}</li>
      </ul>
    </div>
    <form class="form-signin">
      <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="user" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button @click.prevent="auth" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
    </form>
  </div>
</template>
<script>
import {getLogin} from '@/services/Reqres'
export default {
  name: 'LoginView',
  data () {
    return {
      user: '',
      password: '',
      errors: []
    }
  },
  methods: {
    auth () {
      this.errors = []
      getLogin(this.user, this.password).then(response => {
        localStorage.setItem('token', response.data.token)
        this.$router.push({
          name: 'DashboardView'
        })
      }).catch(err => {
        this.errors.push(err.response.data.error)
        console.error(err)
      })
    }
  }
}
</script>
