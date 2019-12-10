import Guest from '../views/Guest.vue'
import Home from '@/views/guest/Home'
import Login from '@/views/guest/Login'
import Register from '@/views/guest/Register'
import Category from '@/views/guest/explore/Category'
import Product from '@/views/guest/explore/Product'

export default { 
    path: '/', 
    component: Guest,
    children: [
        { path: '/', component: Home },
        { path: 'login', component: Login },
        { path: 'register', component: Register },
        { path: 'categories/:id', component: Category, props: true },
        { path: 'products/:id', component: Product, props: true },
    ]
}