<template>
  <div class="TIM">
    <Heade msg="请求接口页面2" color="#20af0e" />
    <div class="items" v-for="(item,index) in data" :key="index">
      <h1>{{"["+index+"]"}}。 {{item.title}}</h1>
      <div class="data-text">{{item.body}}</div>
    </div>
  </div>
</template>
<script>
import Heade from "@/components/Heade.vue";
export default {
  name: "",
  data() {
    return {
      // text: process.env.VUE_APP_URL,
      data: []
    };
  },
  created() {
    console.log(this.$api)
    // console.log("axios是什么", this.$axios);
    this.$axios.get(this.$api + "posts").then(res => {
      this.data = res.data;
      console.log(res);
    });
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  },
  components: {
    Heade
  }
};
</script>
<style scoped>
.TIM {
  padding-top: 46px;
  padding-bottom: 65px;
}
.items {
  padding: 0.266667rem;
  border-bottom: 1px solid #f9f1f1;
}

.items h1 {
  color: #555;
  font-size: 0.473333rem;
  line-height: 0.45rem;
  font-weight: normal;
  margin-bottom: 0.266667rem;
}
.data-text {
  color: #7b7575;
  text-align: justify;
}
</style>