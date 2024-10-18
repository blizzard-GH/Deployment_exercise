import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/store.js';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/InformationPage.vue')
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: () => import('../views/AboutUs.vue')
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/userProfile',
    name: 'UserProfilePage',
    component: () => import('../views/UserProfile.vue')
  },
  {
    path: '/contactUs',
    name: 'ContactUs',
    component: () => import('../views/ContactUs.vue')
  },
  {
    path: '/donation',
    name: 'DonationPage',
    component: () => import('../views/DonationPage.vue')
  },
  {
    path: '/userRegistration',
    name: 'UserRegistrationPage',
    component: () => import('../views/UserRegistration.vue')
  },
  {
    path: '/newsFeed',
    name: 'NewsFeed',
    component: () => import('../views/NewsFeed.vue')
  },
  {
    path: '/adminPage',
    name: 'AdminPage',
    component: () => import('../views/AdminPage.vue')
  },
  {
    path: '/ratingPage',
    name: 'RatingPage',
    component: () => import('../views/RatingPage.vue')
  },
  {
    path: '/fireLogin',
    name: 'FireLogin',
    component: () => import('../views/FirebaseLogin.vue')
  },
  {
    path: '/fireRegister',
    name: 'FireRegister',
    component: () => import('../views/FirebaseRegistrationPage.vue')
  },
  {
    path: '/addBook',
    name: 'AddBook',
    component: () => import('../views/AddBook.vue')
  },
  {
    path: '/bookList',  // Note the change in the route name to correct capitalization
    name: 'BookList',
    component: () => import('../components/BookList.vue')
  },
  {
    path: '/getBookCount',
    name: 'GetBookCount',
    component: () => import('../views/GetBookCountView.vue')
  },
  {
    path: '/weatherCheck',
    name: 'WeatherCheck',
    component: () => import('../views/WeatherView.vue')
  },
  {
    path: '/countBookAPI',
    name: 'CountBookAPI',
    component: () => import('../views/CountBookAPI.vue')
  },
  {
    path: '/getAllBookAPI',
    name: 'GetAllBookAPI',
    component: () => import('../views/GetAllBookAPI.vue')
  }
];

const router = createRouter({mode: 'hash',
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (!store.state.isAuthenticated && to.name === 'UserProfile') {
    alert('You must log in to view your profile.');
    next({ name: 'LoginPage' });
  } else {
    next();
  }
});

export default router;