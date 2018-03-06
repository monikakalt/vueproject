<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>

             <v-form  name="register-form" autocomplete="off" >
                <v-text-field
                  label="Email"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
              <br>
                <v-text-field
                  label="Password"
                  type="password"
                  v-model="password"
                  :rules="passwordRules"
                  required
                  autocomplete="new-password"
                ></v-text-field>
              </v-form>
              <div class="error" v-html="error"></div>
              <br>
              <v-btn dark class="cyan" @click="register">Register</v-btn>
            </div>

    </v-flex>
  </v-layout>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'],
      error: null
    }
  },
  watch: {
    email (value) {
      console.log('email changed', value)
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
