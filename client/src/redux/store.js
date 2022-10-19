import { configureStore } from '@reduxjs/toolkit';
import arrItemsCustomer from './customerSlice';
import bill from './billSlice'
import product from './productSlice'

const root = {
   
}
const store = configureStore({
reducer: {
    customers: arrItemsCustomer,
    bill: bill,
    products: product
},
})
export default store;