import Vue from 'vue'
import Router from 'vue-router'
const Home =  () => import ('../pages/Home.vue')
const Login =  () => import ('../pages/Login.vue')
const EditPost = () => import ('../pages/EditPost.vue')
const PostList = () => import ('../pages/PostList.vue')

Vue.use(Router)
const routes = [
  {
    path: '/', 
    name:'Home',
    component: Home,
    meta: '首页',
    children: [
      {
        path:'editpost',
        name: 'editPostPage',
        component: EditPost,
        meta: '编辑文章',
      },
      {
        path:'postlist',
        name: 'postListPage',
        component: PostList,
        meta: '文章列表',
      }
    ]
 },
  { 
    path: '/login', 
    name:'LoginPage',
    component: Login,
 }
] 

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if(!to.path == '/login') {
      const token = localStorage.getItem('token')
      token? next():next('/login')
  } else {
    next()
  }

})

export default router