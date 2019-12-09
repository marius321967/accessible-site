import Admin from '@/views/Admin'
import Panel from '@/views/admin/Panel'
import Users from '@/views/admin/Users'
import Products from '@/views/admin/Products'
import ProductsNew from '@/views/admin/products/New'
import ProductsView from '@/views/admin/products/View'

export default {
    path: '/admin',
    component: Admin,
    children: [
        { path: '', component: Panel },
        { path: 'users', component: Users },
        { path: 'products', component: Products },
        { path: 'products/new', component: ProductsNew },
        { path: 'products/:id', component: ProductsView, props: true },
    ]
}