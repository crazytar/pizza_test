
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
    console.log('Home ', searchValue);
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
            <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {isLoading ?
                [... new Array(6)].map(obj => <Skeleton />) : (
                    productsArr
                        .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map(obj => <PizzaBlock key={obj.id} {...obj} />)
                )
            }
        </div>
        <Pagination onChangePage={number => setcurrentPage(number)} />


    </>);
}

export default Home;