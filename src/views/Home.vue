<template>
  <div class="home">
    <!-- <div>text:{{text}}</div>
    <button @click="routerfen">跳转连接</button>
    <img alt="Vue logo" src="../assets/logo.png" />-->
    <HelloWorld :voce="voce" msg="我传递的是字符串" />
    <router-view></router-view>
    <!-- <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">name</van-tabbar-item>
      <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
    </van-tabbar> -->
    <TabBar1 :data="tabbarData"/>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
// import { Icon, Tabbar, TabbarItem } from "vant";
import TabBar1 from "@/components/TabBar";
export default {
  name: "home",
  data() {
    return {
      text: process.env.VUE_APP_URL,
      voce: [{ name: "123" }, { name: "234" }],
      active: 0,
      tabbarData: [
        { title: "home", icon: "comment", path: "/" },
        { title: "发布", icon: "address-book", path: "Core/Index" },
        { title: "me", icon: "user", path: "/me" }
      ]
    };
  },
  methods: {
    routerfen() {
      const id = "123";
      // this.$router.push({ path: `/about/${userId}` })
      // this.$router.push({name: "about",params: { id: id },query: { id: 123 }});
      // this.$router.push('/about')//replace('/about')
      this.$router.go(-1); //返回上一页
    },
    vuefen() {
      console.log(this.value);
    }
  },
  created() {
    console.log("axios是什么", this.$axios);
  },
  components: {
    HelloWorld,
    TabBar1,
    // [Tabbar.name]: Tabbar, 
    // [TabbarItem.name]: TabbarItem,
    // [Icon.name]: Icon
  }
};
</script>
<style scoped>
.text {
  color: red;
  font-size: 0.44rem;
  width: 100px;
}
</style>

