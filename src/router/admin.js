import Admin from '@/views/Admin'
import Panel from '@/views/admin/Panel'
import Users from '@/views/admin/Users'
import Products from '@/views/admin/Products'
import ProductsNew from '@/views/admin/products/New'
import ProductsView from '@/views/admin/products/View'
import Categories from '@/views/admin/Categories'
import CategoriesNew from '@/views/admin/categories/New'
import CategoriesView from '@/views/admin/categories/View'

export default {
    path: '/admin',
    component: Admin,
    children: [
        { path: '', component: Panel },
        { path: 'users', component: Users },
        { path: 'products', component: Products },
        { path: 'products/new', component: ProductsNew },
        { path: 'products/:id', component: ProductsView, props: true },
        { path: 'categories', component: Categories },
        { path: 'categories/new', component: CategoriesNew },
        { path: 'categories/:id', component: CategoriesView, props: true },
    ]
}