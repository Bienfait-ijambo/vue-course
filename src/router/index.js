import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/post/HomePage.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/post/PostPage.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/post/AboutPage.vue')
        },
        {
          path: '/post/:id',
          name: 'single-post',
          component: () => import('../views/post/SinglePostPage.vue')
        },
        {
          path: '/learn-composition-api',
          name: 'learn-composition-api',
          component: () => import('../views/composition-api/LearnCompositionApi.vue')
        },
        // Refactored pages to composition Api

        {
          path: '/reactor_home',
          name: 'reactor_home',
          component: () => import('../views/post/RefactorPostPage.vue')
        },
        {
          path: '/refactor_post/:id',
          name: 'refactor_post',
          component: () => import('../views/post/RefactorSinglePostPage.vue')
        },
      ]
    }
  ]
})

export default router
