import { configureStore } from '@reduxjs/toolkit'
import filter from './filterSlice' //takes filterSlice.reducer by default
import cart from './cartSlice'

export const pizzaStore = configureStore({
    reducer: {
        filterReducer: filter,
        cart: cart,
    },
})
// console.log('pizzaStore: ', pizzaStore);