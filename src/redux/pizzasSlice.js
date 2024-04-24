import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzasFromBeckend',
    async (params) => {
        const { categoryId, currentPage } = params;
        const url = new URL('https://65d7103d27d9a3bc1d7a0dda.mockapi.io/pizza_site');
        //const url = new URL('http://localhost:3500/pizzas');
        url.searchParams.append('page', currentPage);
        url.searchParams.append('limit', 4);
        categoryId && url.searchParams.append('category', categoryId);
        const { data } = await axios.get(url);
        return data
    }
)
const initialState = {
    productsArr: [],
    status: '',

}

export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState, //in Js when prop name of Obj is ommited, it creates initialState: initialState
    reducers: {

        setItems(state, action) {
            state.productsArr = action.payload;

        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            // console.log('fulfilled: ', state)
            state.productsArr = action.payload;
            state.status = 'success';

        });
        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.status = 'pending';
            state.productsArr = []; //clear arr in case of changing category ect

            // console.log('pending...' )
        });
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            // console.log('rejected: ', state)
            state.status = 'error';
            state.productsArr = [];

        });

    }

    // extraReducers: {
    //     [fetchPizzas.pending]: (state, action) => {
    //         console.log('pending...fetchPizzas: ', fetchPizzas)
    //     },
    //     [fetchPizzas.fulfilled]: (state, action) => {
    //         console.log('fulfilled: ', state)
    //     },
    //     [fetchPizzas.rejected]: (state, action) => {
    //         console.log('error: ', state)
    //     },

    // },

});


export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer