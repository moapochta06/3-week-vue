import {createRouter, createWebHistory} from 'vue-router'; 

export default createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/', 
            name: 'home',
            component: ()=> import('@/pages/NewsList/NewsListPage.vue')
        },
        {
            path: '/news/:id',
            name: 'news',
            component: ()=> import('@/pages/NewsPages/NewsPage.vue'),
            params: true
        }
    ]
})