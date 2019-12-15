import Guest from '../views/Guest.vue'
import Home from '@/views/guest/Home'
import Login from '@/views/guest/Login'
import Register from '@/views/guest/Register'
import Category from '@/views/guest/explore/Category'
import Product from '@/views/guest/explore/Product'
import Cart from '@/views/user/Cart'
import Checkout from '@/views/user/Checkout'
import CheckoutSuccess from '@/views/user/CheckoutSuccess'
import Profile from '@/views/user/Profile'

export default { 
    path: '/', 
    component: Guest,
    children: [
        { path: '/', component: Home },
        { path: 'login', component: Login },
        { path: 'register', component: Register },
        { path: 'categories/:id', component: Category, props: true },
        { path: 'products/:id', component: Product, props: true },
        { path: 'cart', component: Cart },
        { path: 'checkout', component: Checkout },
        { path: 'checkout-success', component: CheckoutSuccess },
        { path: 'profile', component: Profile },
    ]
}