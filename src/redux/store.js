import { configureStore } from '@reduxjs/toolkit'
import filter from './filterSlice' //takes filterSlice.reducer by default
import cart from './cartSlice'
import pizzas from './pizzasSlice'

export const pizzaStore = configureStore({
    reducer: {
        filterReducer: filter,
        cart,
        pizzas
    },
})
// console.log('pizzaStore: ', pizzaStore);