<template>
  <div class="main">
    <h1>Login</h1>
    <div class="form-container">
      <div class="loginSignup">
        <button class="top-login-btn" @click="$router.push('/login')">
          <span>
            <i class="fas fa-sign-in-alt"></i>
          </span>
          Login
        </button>
        <button class="top-signup-btn" @click="$router.push('/signup')">
          <span>
            <i class="fas fa-user-plus fa-xs"></i>
          </span>
          Sign up
        </button>
      </div>
      <form @submit.prevent="handleSubmit">
        <input required type="email" placeholder="Email" v-model="email" />
        <div class="password-box">
          <input
            required
            ref="password"
            type="password"
            placeholder="Password"
            v-model="password"
          />
          <div class="password-eye" @click="passwordView">
            <i v-if="passwordShow" class="fas fa-eye" />
            <i v-else class="fas fa-eye-slash" />
          </div>
        </div>
        <div class="lower-details">
          <div class="remember-me">
            <input type="checkbox" v-model="rememberMe" />
            <label>Remember Me</label>
          </div>
          <p>Forgot Password?</p>
        </div>
        <button class="submit-btn">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      passwordShow: false,
      rememberMe: false,
      apiData: {}
    }
  },
  methods: {
    passwordView() {
      this.passwordShow = !this.passwordShow
      this.$refs.password.type = this.passwordShow ? "text" : "password"
    },
    handleSubmit() {
      this.apiData = {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe
      }
      console.log(this.apiData)
    }
  },
  components: {}
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.main {
  padding: 40px 0px;
}
.form-container {
  width: 35%;
  min-width: 340px;
  max-width: 420px;
  height: auto;
  border-radius: 4px;
  margin: 40px auto;
  background: #fff;
  box-shadow: 0px 0px 3px lightgray;
}
.loginSignup {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}
.top-login-btn,
.top-signup-btn {
  height: 60px;
  font-size: 24px;
  font-weight: 600;
  border: none;
  outline-style: none;
  cursor: pointer;
}
.top-signup-btn {
  text-align: left;
  color: #777;
  background: rgba(240, 240, 240, 0.8);
}
.top-signup-btn span {
  margin: 0px 20px;
  color: #777;
}
.top-login-btn {
  background: #fff;
  text-align: left;
  color: #000;
}
.top-login-btn span {
  color: #044efc;
  margin: 0px 20px;
}
form {
  padding: 30px 25px;
}
input {
  border: 1px solid rgb(234, 234, 234);
  border-radius: 5px;
  padding: 10px;
  outline-style: none;
  margin-bottom: 15px;
  width: 100%;
}
.password-box {
  position: relative;
}
.password-eye {
  position: absolute;
  background: white;
  top: 11px;
  right: 12px;
  font-size: 13px;
}
input:focus {
  box-shadow: 0 0 2px 2px #2463f5;
}
.lower-details {
  display: grid;
  grid-template-columns: 50% 50%;
  font-size: 14px;
  margin-bottom: 15px;
}
.lower-details p {
  text-align: right;
  color: #044efc;
}
.remember-me {
  display: flex;
  align-items: center;
  justify-content: left;
}
.remember-me input {
  box-shadow: none;
  padding: 0;
  margin: 0;
  width: 16px;
}
.remember-me label {
  width: 100%;
  text-align: left;
  margin-left: 7px;
}
.submit-btn {
  padding: 10px;
  border: none;
  border-radius: 3px;
  width: 100%;
  background: #044efc;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}
.submit-btn:hover {
  background: #2463f5;
}
</style>
