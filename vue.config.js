const goods = require("./data/test.json")
module.exports = {
  baseUrl: '/', //跟路劲  baseUrl  publicPath:'./',//vue-cli3.3+新版本使用
  outputDir: 'dist', //构建输出目录 npm run build
  assetsDir: 'assets', //静态资源目录（js css imgeas）
  lintOnSave: false, //是否开启eslint 保存检测 有效值 true false error
  devServer: {
    open: false, //启动项目自动在浏览器打开 false 取消 true打开
    host: 'localhost', //主机的名字 真机测试可以写成 0.0.0.0
    port: 8081, //端口号
    https: false,
    hotOnly: false, //热模块更新 写flase 就好
    proxy: { //跨域
      // 配置跨越
      '/api': {
        target: "http://jsonplaceholder.typicode.com/", //跨域地址
        ws: true,
        changOrigin: true, //是否跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    // webpack 配置
    before(app) {
      //访问地址应该是 http://localhost:8081//api/goods
      app.get("/api/goods", (req, res) => { 
        res.json(goods)
      });
    }
  }
}
