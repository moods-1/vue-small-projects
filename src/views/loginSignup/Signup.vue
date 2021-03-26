<template>
  <div class="main">
    <h1>Get Started</h1>
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
        <div class="form-names">
          <input
            required
            type="text"
            placeholder="First Name"
            v-model="firstName"
          />
          <input
            required
            type="text"
            placeholder="Last Name"
            v-model="lastName"
          />
        </div>
        <input required type="text" placeholder="Company" v-model="company" />
        <input
          required
          type="text"
          placeholder="Phone Number"
          v-model="phone"
        />
        <input
          type="text"
          placeholder="Website - https://yoursite.com"
          v-model="website"
        />
        <input
          required
          type="email"
          placeholder="Email"
          maxlength="32"
          v-model="email"
        />
        <div class="password-box">
          <input
            required
            ref="password"
            type="password"
            minlength="8"
            placeholder="Password"
            v-model="password"
          />
          <div class="password-eye" @click="passwordView">
            <i v-if="passwordShow" class="fas fa-eye" />
            <i v-else class="fas fa-eye-slash" />
          </div>
        </div>
        <div class="password-box">
          <input
            required
            ref="passwordConfirm"
            type="password"
            placeholder="Confirm Password"
            v-model="passwordConfirm"
          />
          <div class="password-eye" @click="passwordConfirmView">
            <i v-if="passwordConfirmShow" class="fas fa-eye" />
            <i v-else class="fas fa-eye-slash" />
          </div>
        </div>
        <button class="submit-btn">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
import {passwordCheck}  from './utils'

export default {
  name: "Signup",
  data() {
    return {
      firstName: "",
      lastName: "",
      company: "",
      phone: "",
      website: "",
      email: "",
      password: "",
      passwordShow: false,
      passwordConfirmShow: false,
      passwordConfirm: ""
    }
  },
  methods: {
    passwordView() {
      this.passwordShow = !this.passwordShow
      this.$refs.password.type = this.passwordShow ? "text" : "password"
    },
    passwordConfirmView() {
      this.passwordConfirmShow = !this.passwordConfirmShow
      this.$refs.passwordConfirm.type = this.passwordConfirmShow
        ? "text"
        : "password"
    },
    handleSubmit() {
      const passwordGood = passwordCheck(this.password)
      console.log(passwordGood)
      if (passwordGood) {
        this.apiData = {
          firstName: this.firstName,
          lastName: this.lastName,
          company: this.company,
          phone: this.phone,
          website: this.website,
          email: this.email,
          password: this.password    
        }
        console.log(this.apiData)
      } else {
        console.log("In else section ...")
      }  
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
  padding-top: 40px;
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
  background: #fff;
  text-align: left;
}
.top-signup-btn span {
  color: #044efc;
  margin: 0px 20px;
}
.top-login-btn {
  text-align: left;
  background: rgba(240, 240, 240, 0.8);
  color: #777;
}
.top-login-btn span {
  margin: 0px 20px;
}
form {
  padding: 30px 25px;
}
.form-names {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  column-gap: 10px;
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
