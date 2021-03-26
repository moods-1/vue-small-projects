<template>
  <input type="text" placeholder="Search for a user" @keyup="userFilter" />
</template>

<script>
export default {
methods: {
    userFilter(e) {
      const { value } = e.target
      this.$emit("user", value)
    }
  }
}
</script>

<style>
input{
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
    border: none;
    border-bottom: 1px solid lightgray;
    font-size: 20px;
    outline-style: none;
}

</style>