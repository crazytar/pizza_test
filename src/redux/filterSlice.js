import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        categoryId: 0,
        sort: {
            sortType: 0,
            sortOrder: 1,
        },
        currentPage: 1, //pagination
        searchValue: '',
    },
    reducers: {

        setCategory(state, action) {
            state.categoryId = action.payload;
        },
        setSortType: (state, action) => {
            // console.log('setSortType state action', state, action);
            state.sort.sortType = action.payload

        },
        setSortOrder: (state, action) => {
            // console.log('setSortOrder state action', state, action);
            state.sort.sortOrder = action.payload
        },
        setCurrentPage: (state, action) => {
            // console.log('setSortOrder state action', state, action);
            state.currentPage = action.payload
        },
        searchValueUpdate: (state, action) => {
            // console.log('setSortOrder state action', state, action);
            state.searchValue = action.payload
        },
        setUrlParams: (state, action) => {
            state.currentPage = Number(action.payload.currentPage);
            state.categoryId = Number(action.payload.categoryId);
            console.log(action);
        },
    },
})
// console.log('filterSlice:', filterSlice);
// Action creators are generated for each case reducer function
export const { setCategory, setSortType,
    setSortOrder, setCurrentPage, setUrlParams, searchValueUpdate } = filterSlice.actions

export default filterSlice.reducer