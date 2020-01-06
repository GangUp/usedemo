<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <router-link to="/conten">简洁</router-link> -->
    <div>
      <!-- <router-view /> -->
    </div>
    <van-tabbar v-model="active" @change="fnex(active)">
      <van-tabbar-item info="3">
        <span>自定义</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" />
      </van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  },
  created() {
    // console.log(this.$route.query.id)
  },
  methods:{
    fnex(i){
      console.log()
    }
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
};
</script>
