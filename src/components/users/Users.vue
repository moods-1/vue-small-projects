<template>
  <h1>Users</h1>
  <div class="users-main">
    <UserSearch @user="updateName" />
    <div class="user" v-for="(user, index) in userFilter()" :key="index">
      <User :user="user" />
    </div>
  </div>
</template>

<script>
import User from "./User.vue"
import UserSearch from "./UserSearch.vue"
export default {
  name: "Users",
  data() {
    return {
      users: [],
      name: ""
    }
  },
  methods: {
    updateName(value) {
      this.name = value
    },
    userFilter() {
      return this.users.filter(user =>
        `${user.name.first} ${user.name.last}`.toLowerCase().includes(this.name)
      )
    },
    getUsers() {
      fetch("https://randomuser.me/api/?results=20")
        .then(res => res.json())
        .then(data => {
          let sorted = data.results.sort((a, b) =>
            a.name.last > b.name.last ? 1 : -1
          )
          this.users = sorted
        })
        .catch(err => console.log(err))
    }
  },
  components: {
    User,
    UserSearch
  },
  mounted() {
    this.getUsers()
  }
}
</script>

<style scoped>
h1 {
  margin: 20px;
}
.users-main {
  width: 540px;
  margin: auto;
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 2px 2px 3px lightgray;
}
</style>
