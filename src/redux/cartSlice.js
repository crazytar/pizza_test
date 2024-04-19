import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalMoney: 0,
    totalPizzas: 0,
    items: [], //array of Items, can be items with similar ID, but different custom fields (type, size)
    // id,
    // title,
    // price,
    // imageUrl,
    // type,
    // size
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState, //in Js when prop name of Obj is ommited, it creates initialState: initialState
    reducers: {

        addToCart(state, action) { //payload = obj
            state.totalMoney += action.payload.price;
            state.totalPizzas++;
            // state.total = state.items.reduce((sum, obj) => sum + obj.price, 0);
            const similarItem = state.items.find((obj) => //if already exist , just inc counter
                obj.id === action.payload.id && obj.type === action.payload.type && obj.size === action.payload.size)
            if (similarItem) {
                similarItem.count++;
                console.log('found similar pizza');

            } else {
                action.payload.count = 1;
                state.items.push(action.payload);

            }
        },
        remFromCart(state, action) { //payload = index of items array, remove obj from array
            const index = action.payload;
            state.totalMoney -= (state.items[index].price * state.items[index].count);
            state.totalPizzas -= state.items[index].count;
            state.items.splice(index, 1);//delete element
            //payload is an index of array items
            //state.items = state.items.filter((item) => item.id !== action.payload.id)
        },
        decrementCount(state, action) {//payload = index of items array,
            const index = action.payload;
            if (state.items[index].count <= 1) {
                return;
            }
            state.items[index].count--;
            state.totalMoney -= state.items[index].price;
            state.totalPizzas--;
            // if (state.items[index].count <= 0) {
            //     state.items.splice(index, 1);//delete element
            // }
        },
        clearCart(state) {
            state.items = [];
            state.totalMoney = 0;
            state.totalPizzas = 0;
        },
    }
})
// console.log('filterSlice:', filterSlice);
// Action creators are generated for each case reducer function
export const { addToCart, clearCart, remFromCart, decrementCount } = cartSlice.actions

export default cartSlice.reducer