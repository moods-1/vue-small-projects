<template>
    <div class="user-box">
      <div class="image-box">
        <img :src="user.picture.medium" alt="" />
      </div>
      <div class="user-details">
        <h2>{{ user.name.first }} {{ user.name.last }}</h2>
        <p><span>Username: </span>{{user.login.username}}</p>
        <p><span>Email: </span>{{ user.email }}</p>
        <p><span>Location: </span>{{user.location.city }}, {{ user.location.country }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: "User",
  props: ["user"]
}
</script>

<style>
.user-box {
  display: flex;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 20px;
}
.image-box {
  width: 100px;
  display: grid;
  place-items: center;
}
.image-box img {
  border-radius: 50%;
}
.user-details {
  align-items: center;
  width: 100%;
}
.user-details p{
    margin-top: 5px;
}
.user-details span{
    font-weight: 600;
}
</style>
