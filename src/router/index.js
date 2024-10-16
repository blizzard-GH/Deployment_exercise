import { createRouter, createWebHistory } from 'vue-router'
import UserRegistrationPage from '../views/UserRegistration.vue'
import UserProfilePage from '../views/UserProfile.vue'
import LoginPage from '../views/LoginPage.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'
import DonationPage from '../views/DonationPage.vue'
import InformationPage from '../views/InformationPage.vue'
import NewsFeed from '../views/NewsFeed.vue'
import AdminPage from '../views/AdminPage.vue'
import RatingPage from '../views/RatingPage.vue'
import FireLogin from '../views/FirebaseLogin.vue'
import FireRegister from '../views/FirebaseRegistrationPage.vue'
import AddBookView from '../views/AddBook.vue'
import BookList from '../components/BookList.vue'
import store from '../store/store.js'
import GetBookCountView from '../views/GetBookCountView.vue'
import WeatherView from '../views/WeatherView.vue'
import CountBookAPI from '../views/CountBookAPI.vue'
import GetAllBookAPI from '../views/GetAllBookAPI.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: InformationPage
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
    //  Per-route Guard
    //  beforeEnter: (to, from) => {
    // return false
    // }
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/userProfile',
    name: 'UserProfilePage',
    component: UserProfilePage
  },
  {
    path: '/contactUs',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/donation',
    name: 'DonationPage',
    component: DonationPage
  },
  {
    path: '/userRegistration',
    name: 'UserRegistrationPage',
    component: UserRegistrationPage
  },
  {
    path: '/newsFeed',
    name: 'NewsFeed',
    component: NewsFeed
  },
  {
    path: '/adminPage',
    name: 'AdminPage',
    component: AdminPage
  },
  {
    path: '/ratingPage',
    name: 'RatingPage',
    component: RatingPage
  },
  {
    path: '/fireLogin',
    name: 'FireLogin',
    component: FireLogin
  },
  {
    path: '/fireRegister',
    name: 'FireRegister',
    component: FireRegister
  },
  {
    path: '/addBook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/bookLIst',
    name: '/BookLIst',
    component: BookList
  },
  {
    path: '/getBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/weatherCheck',
    name: 'WeatherCheck',
    component: WeatherView
  },
  {
    path: '/countBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  },
  {
    path: '/getAllBookAPI',
    name: 'GetAllBookAPI',
    component: GetAllBookAPI
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.state.isAuthenticated && to.name === 'UserProfile') {
    alert('You must log in to view your profile.')
    return { name: 'Login' }
  } else {
    next()
  }
})

// router.beforeEach(async (to, from) => {
//   if(to.name == 'About'{
//     return false;
//   }
// })

export default router
