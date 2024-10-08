<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const isAuthenticated = computed(() => store.getters.isAuthenticated)
const isAdmin = computed(() => store.getters.getUserData.role === 'administrator')

// Method to navigate to the login page
const goToLogin = () => {
  router.push({ name: 'LoginPage' })
}

// Method to navigate to the registration page
const gotoRegistrationPage = () => {
  router.push({ name: 'UserRegistrationPage' })
}

// Method to navigate to the user profile page
const gotoProfilePage = () => {
  router.push({ name: 'UserProfilePage' })
}

// Method to navigate to rating page
const gotoRatingPage = () => {
  router.push({ name: 'RatingPage' })
}

// Method to navigate to Admin page
const gotoAdminPage = () => {
  router.push({ name: 'AdminPage' })
}

// Method to navigate to AddBook page
const gotoAddBook = () => {
  router.push({ name: 'AddBook' })
}

</script>

<template>
  <header>
    <div class="px-3 py-2 bg-light text-white">
      <div class="container">
        <div
          class="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start text-center text-md-left"
        >
          <ul class="nav nav-pills justify-content-center w-100">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active" aria-current="page"
                >Information</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/newsFeed" class="nav-link" active-class="active"
                >News Feed</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" active-class="active">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contactUs" class="nav-link" active-class="active"
                >Contact Us</router-link
              >
            </li>
            <!-- <li class="nav-item">
              <router-link to="/donation" class="nav-link" active-class="active"
                >Donation</router-link
              >
            </li> -->
            <!-- <li class="nav-item">
              <router-link to="/addBook" class="nav-link" active-class="active"
                >Add Book</router-link
              >
            </li> -->
            <!-- <li class="nav-item">
              <router-link to="/fireLogin" class="nav-link" active-class="active"
                >Firebase Login</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/fireRegister" class="nav-link" active-class="active"
                >Firebase Registration</router-link
              >
            </li> -->
            <li class="nav-item">
              <router-link to="/getBookCount" class="nav-link" active-class="active"
                >Get Book Count</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/weatherCheck" class="nav-link" active-class="active"
                >Get Weather</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/countBookAPI" class="nav-link" active-class="active"
                >Count Book API</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/getAllBookAPI" class="nav-link" active-class="active"
                >Get All Books API</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="px-3 py-2 border-bottom mb-3">
      <div class="container d-flex flex-wrap justify-content-center">
        <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
        </form>
        <div class="text-end" v-if="!isAuthenticated">
          <button type="button" class="header-login-button" @click="goToLogin">Sign-in</button>
          <button type="button" class="header-signup-button" @click="gotoRegistrationPage">
            Register
          </button>
        </div>
        <div class="text-end" v-if="isAuthenticated">
          <button type="button" class="header-signup-button" @click="gotoProfilePage">
            My Profile
          </button>
        </div>
        <div class="text-end" v-if="isAuthenticated && !isAdmin">
          <button type="button" class="header-rate-button" @click="gotoRatingPage">
            Rate an Event
          </button>
        </div>
        <div class="text-end" v-if="isAuthenticated && isAdmin">
          <button type="button" class="header-rate-button" @click="gotoAdminPage">
            Manage Users
          </button>
        </div>
        <div class="text-end" v-if="isAuthenticated && isAdmin">
          <button type="button" class="header-rate-button" @click="gotoAddBook">Add Books</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}
.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

@media (min-width: 768px) {
  .logo-fluid {
    position: static;
    transform: translateY(0);
    margin-right: 20px;
  }
}

.nav-pills {
  flex-grow: 1;
  justify-content: center;
}

.bg-light.text-white {
  color: #000;
  background-color: #f8f9fa;
}

.nav-link.active {
  color: #fff;
  background-color: #3973c4;
  border-radius: 5px;
}

.nav-link.active:hover {
  color: #fff;
  background-color: #2087d6;
  border-radius: 5px;
}

.nav-link {
  transition:
    color 0.3s ease,
    background-color 0.3s ease;
  color: #1037a2;
}

.nav-link:hover {
  color: #19b3e6;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.logo-fluid {
  max-width: 80px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 15px;
  top: 10px;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}

.header-login-button {
  background-color: #2b4288;
  color: white;
  border: rgb(123, 123, 123);
  border-style: double;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px #999;
  transition: all 0.3s;
}

.header-login-button:hover {
  background-color: #4c96cf;
  box-shadow: 0 5px #666;
  transform: translateY(-2px);
}

.header-login-button:active {
  background-color: #1f858a;
  box-shadow: 0 2px #666;
  transform: translateY(6px);
}

.header-signup-button {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: rgb(158, 155, 155);
  border-style: groove;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px #999;
  transition: all 0.3s;
}

.header-signup-button:hover {
  background-color: #179d79;
  color: rgb(255, 255, 255);
  box-shadow: 0 5px #666;
  transform: translateY(-2px);
}

.header-signup-button:active {
  background-color: #1f8a21;
  color: rgb(255, 255, 255);
  box-shadow: 0 2px #666;
  transform: translateY(6px);
}

.header-rate-button {
  background-color: #33c2bf;
  color: white;
  border: rgb(123, 123, 123);
  border-style: double;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px #999;
  transition: all 0.3s;
}

.header-rate-button:hover {
  background-color: #41e5f1;
  box-shadow: 0 5px #666;
  transform: translateY(-2px);
}

.header-rate-button:active {
  background-color: #2fc9d1;
  box-shadow: 0 2px #666;
  transform: translateY(6px);
}
</style>
