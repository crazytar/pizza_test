import { configureStore } from '@reduxjs/toolkit'
import filter from './filterSlice' //takes filterSlice.reducer by default

export const pizzaStore = configureStore({
    reducer: {
        filterReducer: filter,
    },
})
// console.log('pizzaStore: ', pizzaStore);