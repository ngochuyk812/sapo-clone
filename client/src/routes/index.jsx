import Home from '../components/Home'
import OderMain from '../components/OderMain'
import ListOrder from '../components/ListOrder'
import Product from '../components/Product'
import Customer from '../components/Customer'
import Login from '../components/Login'
const publicRoutes = [
    {path : '/login', component: Login, layout : null},

]
const privateRouter = [
    {path : '/', component: Home, },
    {path : '/odermain', component: OderMain  },
    {path : '/listoder', component: ListOrder},
    {path : '/product', component: Product  },
    {path : '/customer', component: Customer},

]

export {publicRoutes, privateRouter}