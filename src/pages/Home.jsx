
import React from "react";
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from "../components/PizzaBlock/skeleton";
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import Pagination from '../components/Pagination';

import { useContext } from 'react';

import { AppContext } from "../App";
const Home = () => {
    const [productsArr, productsArrUpdate] = React.useState([]);
    const [isLoading, isLoadingSet] = React.useState(true);
    const [categotyId, categotyIdSet] = React.useState(0);
    const [currentPage, setcurrentPage] = React.useState(1); //pagination
    const { searchValue, searchValueUpdate } = useContext(AppContext);
    const [sortOrder, setSortOrder] = React.useState(0); //0 - ACSC 1 - DESC
    const [sortType, setSortType] = React.useState(0); //0 - popular, 1 - price, 2 - alphabet

    React.useEffect(() => {
        isLoadingSet(true);
        //const categoty = categotyId > 0 ? `category=${categotyId}` : ``;
        const url = new URL('https://65d7103d27d9a3bc1d7a0dda.mockapi.io/pizza_site');
        url.searchParams.append('page', currentPage);
        url.searchParams.append('limit', 4);
        categotyId && url.searchParams.append('category', categotyId);
        fetch(url, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
            // fetch(`https://65d7103d27d9a3bc1d7a0dda.mockapi.io/pizza_site?${category}`)
            .then((response) => response.json())
            .then((json) => {
                productsArrUpdate(json);
                isLoadingSet(false);
            });
        window.scrollTo(0, 0);

        //axios.get('https://65d7103d27d9a3bc1d7a0dda.mockapi.io/pizza_site').then(res => productsInCartUpdate(res.data));
    },
        [categotyId, currentPage]
    );
    return (<>

        <div className="content__top">
            <Categories categotyId={categotyId} categotyIdSet={categotyIdSet} />
            <Sort setSortOrder={setSortOrder} setSortType={setSortType} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {isLoading ?
                [... new Array(6)].map(obj => <Skeleton />) : (
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
                            console.log('SortType, sortOrder, res', sortType, sortOrder, res);

                            return res;
                        })
                        //Later, it needs to be done request to beckend for filtering
                        .map(obj => <PizzaBlock key={obj.id} {...obj} />)
                )
            }
        </div>
        <Pagination onChangePage={number => setcurrentPage(number)} />


    </>);
}

export default Home;