import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/HomeView.vue';
import ExplorerView from '../views/ExplorerView.vue';
import NotificationsView from '../views/NotificationsView.vue';
import MessagesView from '../views/MessagesView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:MainView
  },
  {
    path: '/explore',
    name: 'explore',
    component: ExplorerView
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: NotificationsView
  },
  {
    path: '/messages',
    name: 'messages',
    component: MessagesView
  }
]

const router = new VueRouter({
  routes
})

export default router
