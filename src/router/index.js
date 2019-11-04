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
    children: [
      {
        path:'editpost',
        name: 'editPostPage',
        component: EditPost
      },
      {
        path:'postlist',
        name: 'postListPage',
        component: PostList
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