<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo('/')">TabTracker</span>
     </v-toolbar-title>
     <v-toolbar-items>
       <v-btn flat dark>Browse</v-btn>
     </v-toolbar-items>
     <v-spacer></v-spacer>
     <v-toolbar-items>
       <!-- <router-link to="register"> -->
        <v-btn flat
        dark @click="navigateTo('register')">Sign up</v-btn>
       <!-- </router-link> -->
     </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color:tan;
}
</style>
