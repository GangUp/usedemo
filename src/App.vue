<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link>| -->
    <!-- <router-link :to="{ path: `/about/${123}`,query:{id:'这是path跳转'} }">About</router-link> -->
    <!-- <router-link :to="{ name: 'about', params: { id: 'data' },query:{id:'路由传参'}}">About</router-link> -->
    <!-- </div> -->
    <router-view/>
  </div>
</template>
<script>
// import comNav from "@/components/nav";
export default {
  components: {
    // comNav
  }
};
</script>

<style>
@import "./assets/css/reset.css";
/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
