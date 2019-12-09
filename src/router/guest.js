import Guest from '../views/Guest.vue'
import Home from '@/views/guest/Home'
import Login from '@/views/guest/Login'
import Register from '@/views/guest/Register'

export default { 
    path: '/', 
    component: Guest,
    children: [
        { path: '/', component: Home },
        { path: 'login', component: Login },
        { path: 'register', component: Register },
    ]
}