import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/:lang(de|en-US|es|fr|pt-BR)?',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        redirect(to) {
          return { name: 'home', params: to.params, query: to.query };
        },
      },
      {
        name: 'home',
        path: 'home',
        component: () => import('pages/IndexPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
