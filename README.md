## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### 指令
vue --help 查看命令
-V 版本号
-h 所拥有的命令
add 添加插件
invoke 创建好项目 调用插件
serve 开发环境启动项目
build 生成环境 打包
ui 调用对应ui
init 生成一个项目

vue create --help 详细的命令介绍
npm run serve 启动

### 自定义脚手架摹本
首要条件脚手架3.0.0版本
1、create 创建
2、Manuall select feateres
3、选择需要的配置
4、回车 history是否使用 选择Y/N 看个人爱好
5、css less 选择 看个人爱好
6、ESLint+Standard config 选择基本的配置
7、Lint on save 保存
8、dedicated config files
9、显示隐藏文件 C:\Users\wsy下的.vuerc文件

### 3.0.0添加新的插件方法
1、2.0的添加模式 npm install vuex（常识安装）
2、3.0的添加模式 vue add vuex

主意：如果装一个对页面没有太多的结构影响的话 还是用npm install axios这种 如果装的是一个ui的库的话 需要对组建有一些影响 就用vue add vuex这种

额外只是 vuetify是vue的ui的库存 和element的很相似

### 全局环境变量的使用
.env文件（代表环境的意思）定义环境的变量 
    VUE_APP_ 这是定义好的 
    VUE_APP_后面是自己定义的:VUE_APP_URL=https://dev.api.com
    在data里面拿到环境变量：process.env.VUE_APP_URL 这样就可以拿到了
    修改.env就需要重新启项目

.env.development文件（代表的是开发环境变量）
.env.production文件（代表的是生成环境变量） build的时候使用.env.production里面的东西


### 独立运行.vue文件

### VUE-CLI3的基本您使用
模仿微信跳转方式-router