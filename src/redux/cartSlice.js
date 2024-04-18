import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalMoney: 0,
    totalPizzas: 0,
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState, //in Js when prop name of Obj is ommited, it creates initialState: initialState
    reducers: {

        addToCart(state, action) {
            state.totalMoney += action.payload.price;
            state.totalPizzas++;
            // state.total = state.items.reduce((sum, obj) => sum + obj.price, 0);
            const similarItem = state.items.find((obj) =>
                obj.id === action.payload.id && obj.type === action.payload.type && obj.size === action.payload.size)
            if (similarItem) {
                similarItem.count++;
                console.log('found similar pizza');

            } else {
                action.payload.count = 1;
                state.items.push(action.payload);

            }
        },
        remFromCart(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload.id)
            //state.total -= action.payload.price;
        },
        clearCart(state) {
            state.items = [];
            state.total = 0;
        },
    }
})
// console.log('filterSlice:', filterSlice);
// Action creators are generated for each case reducer function
export const { addToCart, clearCart, remFromCart } = cartSlice.actions

export default cartSlice.reducer