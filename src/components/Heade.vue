<template>
  <div class="head" :style="{background:color}">
    <div class="bak">
      <van-icon name="arrow-left" size="24" color="#fff" />
    </div>
    <div class="text">{{msg}}</div>
    <div class="gd"></div>
  </div>
</template>
<script>
import { Icon } from "vant";
export default {
  name: "heade",
  props: {
    msg: String,
    gdMsg: String,
    color: String
  },
  components: {
    [Icon.name]: Icon
  }
};
</script>
<style scoped>
.head {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background: #ccc;
  z-index: 2;
}
.bak,
.gd {
  display: flex;
  align-items: center;
  padding: 0 0.266667rem;
  height: 46px;
  width: 0.72rem;
  flex-shrink: 0;
}
.text {
  color: #fff;
  width: 100%;
  font-size: 0.373333rem;
  text-align: center;
}
</style>