import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        categoryId: 0,
        sort: {
            sortType: 0,
            sortOrder: 1,
        }
    },
    reducers: {

        setCategory(state, action) {
            state.categoryId = action.payload;
            console.log(action);
        },
        filterSort: (state, action) => {
            state.sort.sortType = action.payload
        },
    },
})
// console.log('filterSlice:', filterSlice);
// Action creators are generated for each case reducer function
export const { setCategory, filterSort } = filterSlice.actions

export default filterSlice.reducer