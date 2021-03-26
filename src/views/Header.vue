<template>
  <div class="head">
    <div class="brand">
      <h1>Brand</h1>
    </div>
    <div class="nav">
      <router-link to="/" class="nav-links">Home</router-link>
      <router-link :to="{name: 'Login'}" class="nav-links">Login</router-link>
      <router-link :to="{name: 'Signup'}" class="nav-links">Signup</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.head{
width: 100%;
height: 60px;
display: flex;
justify-content: space-between;
align-items: baseline;
padding:10px 30px;
box-shadow: 0px 0px 8px 3px gray;
background: rgb(0, 106, 255);
color: #FFF;
}
.nav{
    width: 150px;
    display: flex;
    align-items:baseline;
    justify-content: space-between;
}
.nav-links{
    text-decoration: none;
    color: #FFF;
}
.nav-links:hover{
    opacity: 0.8;
}
</style>
