
import React from "react";
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from "../components/PizzaBlock/skeleton";
import Sort from '../components/Sort';
import Categories from '../components/Categories';
const Home = () => {
    const [productsArr, productsArrUpdate] = React.useState([]);
    const [isLoading, isLoadingSet] = React.useState(true);
    React.useEffect(() => {
        isLoadingSet(true);
        fetch('https://65d7103d27d9a3bc1d7a0dda.mockapi.io/pizza_site')
            .then((response) => response.json())
            .then((json) => {
                productsArrUpdate(json);
                isLoadingSet(false);
            });
        window.scrollTo(0, 0);

        //axios.get('https://65d7103d27d9a3bc1d7a0dda.mockapi.io/pizza_site').then(res => productsInCartUpdate(res.data));
    },
        [] //second arg of useEffect empty array, we need fetch to be called only once, in app start componentDidMount
    );
    return (<>

        <div className="content__top">
            <Categories />
            <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {isLoading ?
                [... new Array(6)].map(obj => <Skeleton />) :
                productsArr.map(obj => <PizzaBlock key={obj.id} {...obj} />)
            }
        </div>

    </>);
}

export default Home;