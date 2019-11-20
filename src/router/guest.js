import Guest from '../views/Guest.vue'
import Home from '@/views/guest/Home'
import Login from '@/views/guest/Login'

export default { 
    path: '/', 
    component: Guest,
    children: [
        { path: '/', component: Home },
        { path: 'login', component: Login },
    ]
}