
import React from "react";
import axios from "axios";
import qs from 'qs';
import { useNavigate } from "react-router-dom";
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from "../components/PizzaBlock/skeleton";
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';

import { useContext, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setCurrentPage, setUrlParams } from "../redux/filterSlice";

import { AppContext } from "../App";
const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();// we can get it also as store.dispatch importing here our store.js
    const isUrlParams = useRef(false); //is there Url params on start app or no
    const ismMounted = useRef(false); //first render flag

    const [productsArr, productsArrUpdate] = React.useState([]); //products loading state
    const [isLoading, isLoadingSet] = React.useState(true); //is loading in progress...show skeleton
    // const { searchValue, searchValueUpdate } = useContext(AppContext); //we use Redux instead

    const { categoryId, sort, currentPage, searchValue } =
        useSelector((store) => store.filterReducer); //get states from filterReducer slice 
    const { sortType, sortOrder } = sort;

    const fetchFromBackend = () => {
        console.log('fetchFromBackend');
        isLoadingSet(true);
        //const categoty = categoryId > 0 ? `category=${categoryId}` : ``;
        const url = new URL('https://65d7103d27d9a3bc1d7a0dda.mockapi.io/pizza_site');
        url.searchParams.append('page', currentPage);
        url.searchParams.append('limit', 4);
        categoryId && url.searchParams.append('category', categoryId);
        // fetch(url, {
        //     method: 'GET',
        //     headers: { 'content-type': 'application/json' },
        // })
        //     .then((response) => response.json())
        //     .then((json) => {
        //         productsArrUpdate(json);
        //         isLoadingSet(false);
        //     });
        axios.get(url).then(res => {
            productsArrUpdate(res.data);
            isLoadingSet(false);

        });
    }

    React.useEffect(() => { //runs only on first render
        if (window.location.search) { //we also can use useSearchParams hook of react-router-dom
            const params = qs.parse(window.location.search.substring(1));//substring = remove '?' sign at beginning
            // console.log(params);
            dispatch(setUrlParams(params));
            isUrlParams.current = true;
        }
    }, []);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!isUrlParams.current)
            fetchFromBackend()
        isUrlParams.current = false;

    },
        [categoryId, currentPage]
    );
    React.useEffect(() => {
        if (ismMounted.current) {
            const queryString = qs.stringify({
                categoryId,
                currentPage

            });
            navigate(`?${queryString}`); //put categoryId, currentPage to Url
        }
        ismMounted.current = true;
    }
        ,
        [categoryId, currentPage]
    );
    const onChangeCategory = (id) => {
        dispatch(setCategory(id));
    }
    const paginOnChangePage = (number) => {
        dispatch(setCurrentPage(number));
    }
    return (<>

        <div className="content__top">
            <Categories categoryId={categoryId} categoryIdSet={onChangeCategory} />
            <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {isLoading ?
                [... new Array(6)].map((obj, index) => <Skeleton key={index} />) : (
                    productsArr
                        .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .sort((a, b) => {
                            let res = 0;
                            if (sortType === 0) {
                                sortOrder > 0 ? res = (a.rating - b.rating) : res = (b.rating - a.rating);
                            } else if (sortType === 1) {
                                sortOrder > 0 ? res = (a.price - b.price) : res = (b.price - a.price);
                            } else if (sortType === 2) {
                                sortOrder > 0 ? (a.title > b.title ? res = 1 : res = -1) : (a.title > b.title ? res = -1 : res = 1);

                            }
                            return res;
                        })
                        //Later, it needs to be done request to beckend for filtering and sorting
                        .map(obj => <PizzaBlock key={obj.id} {...obj} />)
                )
            }
        </div>
        <Pagination currentPage={currentPage} onChangePage={number => paginOnChangePage(number)} />


    </>);
}

export default Home;