import { createRouter, createWebHistory, useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth.module';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/dashboard' },
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: 'dashboard',
          component: () => import('../pages/dashboard.vue'),
        },
        {
          path: 'account-settings',
          component: () => import('../pages/account-settings.vue'),
        },
        {
          path: 'typography',
          component: () => import('../pages/typography.vue'),
        },
        {
          path: 'icons',
          component: () => import('../pages/icons.vue'),
        },
        {
          path: 'cards',
          component: () => import('../pages/cards.vue'),
        },
        {
          path: 'tables',
          component: () => import('../pages/tables.vue'),
        },
        {
          path: 'form-layouts',
          component: () => import('../pages/form-layouts.vue'),
        },
        {
          path: 'servers/recommended',
          component: () => import('../pages/servers/recommended.vue'),
        },
        {
          path: 'servers/grouping',
          component: () => import('../pages/servers/grouping.vue'),
        },
        {
          path: 'servers/ios',
          component: () => import('../pages/servers/ios.vue'),
        },
        {
          path: 'servers/add',
          component: () => import('../pages/servers/add.vue'),
        },
        {
          path: 'users',
          component: () => import('../pages/users/list.vue'),
        },
        {
          path: 'users/individual',
          component: () => import('../pages/users/individual.vue'),
        },
        {
          path: 'users/partner',
          component: () => import('../pages/users/partner.vue'),
        },
        {
          path: 'plans',
          component: () => import('../pages/plans/list.vue'),
        },
        {
          path: 'plans/add',
          component: () => import('../pages/plans/add.vue'),
        },
        {
          path: 'packages',
          component: () => import('../pages/packages/list.vue'),
        },
        {
          path: 'packages/add',
          component: () => import('../pages/packages/add.vue'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        {
          name: 'login',
          path: 'login',
          component: () => import('../pages/login.vue'),
        },
        {
          path: 'register',
          component: () => import('../pages/register.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../pages/[...all].vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    // const router = useRouter();
    const user = authStore.user;
    const isAuthenticated = authStore.isAuthenticated;
    if (to.path !== '/login' && !isAuthenticated) {
      window.location.href = '/login'
    } else if (to.path === '/login' && isAuthenticated) {
      window.location.href = '/'
    } else {
      next();
    }
});

export default router
