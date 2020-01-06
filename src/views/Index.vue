<template>
  <div class="home">
    <router-view></router-view>
    <TabBarCom :data="tabbarData" />
  </div>
</template>
<script>
import TabBarCom from "@/components/TabBar";
export default {
  name: "index",
  data() {
    return {
      tabbarData: [
        { title: "NavBar", name: "like-o", path: "/chats" },
        { title: "TIM", name: "star-o", path: "/contacts" },
        { title: "WECHART", name: "setting-o", path: "/discover" },
        { title: "ME", name: "fire-o", path: "/me" }
      ]
    };
  },
  components: {
    TabBarCom
  }
};
</script>
<style>
</style>