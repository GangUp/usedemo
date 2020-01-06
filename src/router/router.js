import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',// history hash （带#号模式）
  // base: '/dist/', //添加的地方 访问接口 类似 http://59.111.111.11:4000/dist/ 只有history模式 才需要配置
  routes: [{
    path: '/',
    name: 'home',
    redirect: '/chats',
    component: () => import('@/views/Index'),
    children: [{
      path: '/chats',
      name: 'chats',
      component: () => import('@/views/Chats')
    }, {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/views/Contacts')
    }, {
      path: '/discover',
      name: 'discover',
      component: () => import('@/views/Discover')
    }, {
      path: "/me",
      name: 'me',
      component: () => import('@/views/Me')
    }]
  }, {
    path: "/about",
    name: "name",
    component: () => import('@/views/About')
  }]
})

// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.wxpyqToken ? true : false;
//   if (to.path == '/chats' || to.path == '/contacts') {
//     next();
//   } else {
//     isLogin ? next() : next('/me');
//   }
// });

export default router
 
// export default new Router({
//   mode: 'history',
//   routes: [
//     // {
//     //   path: '*', //如果其他都没有匹配上就会走*号
//     //   redirect: '/', //然后让他跳转到根路锦霞 引导跳转路劲错误会自动回到根路劲
//     // },
//     {
//       path: '/',
//       name: 'home',
//       component: () => import('@/views/Home.vue')
//     },
//     {
//       // path: '/about/:id',
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import( /* webpackChunkName: "about" */ '@/views/About.vue'),
//       // props:(route)=>{{query:Router.id}},
//       children: [{
//         path: '/conten',
//         name: 'conten',
//         component: () => import('@/views/conten.vue')
//       }, ]
//     },
//     {
//       path: '/news',
//       name: 'news',
//       component: () => import('@/views/news.vue')
//     }
//   ]
// })
