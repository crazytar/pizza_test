
import React from "react";
import axios from "axios";
import qs from 'qs';
import { useNavigate } from "react-router-dom";
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from "../components/PizzaBlock/skeleton";
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';
import { Link, useLocation } from 'react-router-dom';

import { useContext, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setCurrentPage, setUrlParams } from "../redux/filterSlice";
import { fetchPizzas } from "../redux/pizzasSlice";

import { AppContext } from "../App";
const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();// we can get it also as store.dispatch importing here our store.js
    const isUrlParams = useRef(false); //is there Url params on start app or no
    const ismMounted = useRef(false); //first render flag

    //const [productsArr, productsArrUpdate] = React.useState([]); //moved to redux
    // const [isLoading, isLoadingSet] = React.useState(true); //is loading in progress...show skeleton moved to Redux
    // const { searchValue, searchValueUpdate } = useContext(AppContext); //we use Redux instead

    const { categoryId, sort, currentPage, searchValue } =
        useSelector((store) => store.filterReducer); //get states from filterReducer slice 
    const { sortType, sortOrder } = sort;

    const { productsArr, status } = useSelector((store) => store.pizzas);
    const fetchFromBackend = async () => {
        console.log('fetchFromBackend');
        //isLoadingSet(true);

        //const categoty = categoryId > 0 ? `category=${categoryId}` : ``;
        // const url = new URL('https://65d7103d27d9a3bc1d7a0dda.mockapi.io/pizza_site');
        // //const url = new URL('http://localhost:3500/pizzas');
        // url.searchParams.append('page', currentPage);
        // url.searchParams.append('limit', 4);
        // categoryId && url.searchParams.append('category', categoryId);

        // fetch(url, {
        //     method: 'GET',
        //     headers: { 'content-type': 'application/json' },
        // })
        //     .then((response) => response.json())
        //     .then((json) => {
        //         productsArrUpdate(json);
        //         isLoadingSet(false);
        //     });
        // axios.get(url).then(res => { 
        //axios.get (or fetch) returns Promis, so we can use .then & .catch (Promis methods)
        //     productsArrUpdate(res.data);
        //     isLoadingSet(false);
        // }).catch((err) => {
        //     console.log('network error');
        //     isLoadingSet(false);

        // })
        // try { //in redux
        //     // const /*res*/ { data } = await axios.get(url); //res is not a Promiss yet, but Obj with data field
        //     // dispatch(setItems(data));
        //     dispatch(fetchPizzas(
        //         {
        //             currentPage, categoryId
        //         }
        //     ))
        // } catch (error) {
        //     console.log('fetch error: ', error);
        // } finally { //stop loading in any case error or not
        //     isLoadingSet(false);
        // }
        dispatch(fetchPizzas({ currentPage, categoryId }));

    }
    React.useEffect(() => { //runs only on first render
        if (window.location.search) { //we also can use useSearchParams hook of react-router-dom
            const params = qs.parse(window.location.search.substring(1));//substring = remove '?' sign at beginning
            dispatch(setUrlParams(params)); //re render
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

        //  if (ismMounted.current) { //if not first render 
        const queryString = qs.stringify({
            categoryId,
            currentPage

        });
        navigate(`?${queryString}`); //put categoryId, currentPage to Url
        // }
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
            {status === 'pending' ?
                [... new Array(6)].map((obj, index) => <Skeleton key={index} />) : (
                    status === 'error' ? (
                        <>
                            <h2>Ошибка получения пицц с бэкенда</h2>
                        </>
                    ) : (
                        productsArr
                            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                            .sort((a, b) => { //Sort mutate array, but returns new sorted array (we use .map then), move it to backend request
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
                            .map(obj => {
                                return (
                                    <Link to={"".concat('/product/', obj.id)} className="products__link" >
                                        <PizzaBlock key={obj.id} {...obj} />
                                    </Link>)
                            })
                    )
                )
            }
        </div >
        <Pagination currentPage={currentPage} onChangePage={number => paginOnChangePage(number)} />


    </>);
}

export default Home;