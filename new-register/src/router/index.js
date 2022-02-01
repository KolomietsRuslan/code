import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/Works.vue'
import Reviews from '../views/Reviews.vue'
import AddReview from '../views/AddReview.vue'
import ReviewsForm from '../components/ReviewsForm.vue'
import Authorize from '../views/Authorize.vue'
import SignIn from '../views/SignIn.vue'
 import {isAuth} from '@/App.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/works',
    name: 'My_works',
    component: Works,

  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews,
  },
  {
    path: '/new_reviews',
    name: 'add_review',
    component: AddReview,
    beforeEnter () {
      if (this.$store.getters['user/isAuth']) {
        next('/new_reviews');
      } else {
        next('/new_reviews');
      }
    }
  },
  {
    path: '/:id',
    component: ReviewsForm,
  },
  {
    path: '/authorize',
    name: 'Authorize',
    component: Authorize,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: SignIn,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
