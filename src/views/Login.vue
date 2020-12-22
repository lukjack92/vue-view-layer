<template>
  <div>
    <h1>Login</h1>
    <input type="text" placeholder="Username" v-model="username" />
    <input type="password" placeholder="Password" v-model="password" />
    <input type="button" @click="login" value="Login" />
    <p v-if="msg">{{ msg }}</p>
  </div>
</template>
<script>
import AuthService from '@/services/AuthService.js';
export default {
  data() {
    return {
      username: '',
      password: '',
      msg: ''
    };
  },
async created() {
   if (this.$store.getters.isLoggedIn) {
       console.log(this.$store.getters.isLoggedIn);
        this.$router.push('/');
    }
},
methods: {
    async login() {
      try {
        const credentials = {
          username: this.username,
          password: this.password
        };
        const response = await AuthService.login(credentials);
        this.msg = response.msg;
        const token = response.token;
        const user = response.user;
        this.$store.dispatch('login', { token, user });
        this.$router.push('/');
      } catch (err) {
        this.msg = err.response.data.msg;
      }
    }
  }
};
</script>