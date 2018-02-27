<template>
  <dashboard-layout>
    <h1>Dashboard</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{user.id}}</td>
          <td>{{user.first_name}}</td>
          <td>{{user.last_name}}</td>
          <td>
            <img :src="user.avatar" width="35">
          </td>
        </tr>
      </tbody>
    </table>
  </dashboard-layout>
</template>
<script>
import DashboardLayout from '@/layouts/DashboardLayout'
import {getUsers} from '@/services/Reqres'
export default {
  name: 'DashboardHomeView',
  data () {
    return {
      users: []
    }
  },
  created () {
    this.getUsersAPI()
  },
  components: {
    DashboardLayout
  },
  methods: {
    getUsersAPI () {
      getUsers().then(response => {
        this.users = response.data.data
      }).catch(err => console.error(err))
    }
  }
}
</script>
