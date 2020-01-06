<template>
  <div class="chats">
    <Heade msg="NavBar22" color="#20af0e" />
    <div class="chats-content">
      <div class="Tabbar">
        <h1>代码演示</h1>
        <div class="itmes">
          <van-button type="default">默认按钮</van-button>
          <van-button type="primary">主要按钮</van-button>
          <van-button type="info">信息按钮</van-button>
          <van-button type="warning">警告按钮</van-button>
          <van-button type="danger">危险按钮</van-button>
        </div>
        <h1>朴素按钮</h1>
        <van-button plain type="primary">朴素按钮</van-button>
        <van-button plain type="info">朴素按钮</van-button>
        <h1>朴素按钮</h1>
        <van-button plain hairline type="primary">细边框按钮</van-button>
        <van-button plain hairline type="info">细边框按钮</van-button>
        <h1>朴素按钮</h1>
        <van-button disabled type="primary">禁用状态</van-button>
        <van-button disabled type="info">禁用状态</van-button>
        <h1>加载状态</h1>
        <van-button loading type="primary" />
        <van-button loading type="primary" loading-type="spinner" />
        <van-button loading type="info" loading-text="加载中..." />
        <h1>按钮形状</h1>
        <van-button square type="primary">方形按钮</van-button>
        <van-button round type="info">圆形按钮</van-button>
        <h1>图标按钮</h1>
        <van-button icon="star-o" type="primary" />
        <van-button icon="star-o" type="primary">按钮</van-button>
        <van-button icon="https://img.yzcdn.cn/vant/logo.png" type="info">按钮</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import Heade from "@/components/Heade.vue";
import { Button } from "vant";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    Heade,
    [Button.name]: Button
  }
};
</script>
<style scoped>
.chats {
  padding-top: 46px;
  padding-bottom: 45px;
}
.chats-content {
  padding: 0.133333rem 3%;
}
.Tabbar h1 {
  color: #333;
  padding: 0.4rem 0;
  font-weight: normal;
  line-height: 0.56rem;
  font-size: 0.426667rem;
}
</style>