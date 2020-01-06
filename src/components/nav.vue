<template>
  <div class="nav">
    <ul>
      <li>
          <!-- tag="div" 制定router-link生成的标签-->
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/a">餐饮</router-link>
      </li>
      <li>
        <router-link to="/b">信息</router-link>
      </li>
      <li>
        <router-link to="/c">门店</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "indexNav"
};
</script>
<style scoped>
.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 46px;
  background: #43c286;
}
.nav ul {
  height: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav ul li {
  color: #fff;
  padding: 0 30px;
}

.nav a {
  font-weight: bold;
  color: #999;
}

.nav a.router-link-exact-active {
  color: #fff;
}
</style>


