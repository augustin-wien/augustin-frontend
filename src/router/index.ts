import keycloak from '@/keycloak/keycloak'
import { createRouter, createWebHistory } from 'vue-router'
import { Payment } from '@/stores/PaymentStore'
import Default from '@/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landingpage',
      meta: {
        layout: Default,
      },
      component: () => import('../views/LandingPage.vue')
    },
    {
      path: '/additionalproducts',
      name: 'Additional Products',
      component: () => import('../views/AdditionalProducts.vue'),
      meta: { transition: 'slide-left' }
    },
    {
      path: '/print-digital',
      name: 'Version choice',
      component: () => import('../views/PrintDigital.vue'),
      meta: { transition: 'slide-left' }
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404View.vue'),
      meta: { transition: 'slide-left' }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/tipping',
      name: 'Tippingpage',
      component: () => import('../views/TippingPage.vue')
    },
    {
      path: '/information',
      name: 'InformationPrintEpaper',
      component: () => import('../views/InformationPrintEpaper.vue')
    },
    {
      path: '/confirmation',
      name: 'Confirmation',
      component: () => import('../views/FinalPurchaseConfirmation.vue'),
      meta: { transition: 'slide-left' }
    },
    {
      path: '/payment',
      name: 'Payment',
      component: () => import('../views/PaymentStripe.vue'),
      meta: { transition: 'slide-left' }
    },
    {
      path: '/paymentconfirmation',
      name: 'Payment Confirmation',
      component: () => import('../views/PaymentConfirmation.vue')
    },
    {
      path: '/vendoroverview',
      name: 'Vendor Overview',
      component: () => import('../views/VendorOverview.vue')
    }
  ]
})

// Check if the user is authenticated
router.beforeEach(async (to) => {
  if (
    to.meta.requiresAuth &&
    !isAuthenticated() &&
    // ❗️ Avoid an infinite redirect
    to.name !== '404'
  ) {
    // redirect the user to the login page
    return { name: '404' }
  }
})

//Check if AGBs are accepted
router.beforeEach(async (next) => {
  if(
    next.name == 'Payment' &&
    !Payment().agbChecked){
    return {}
  }
})

// Check if the user is authenticated
function isAuthenticated() {
  console.log('isAuthenticated', keycloak.authenticated)
  if (!keycloak.authenticated) {
    keycloak.login()
  }
  return keycloak.authenticated
}

export default router
