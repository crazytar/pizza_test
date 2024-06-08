import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import PizzaBlock from '../components/PizzaBlock';
const ProductDetails = () => {
    const { id } = useParams();
    console.log('useParams" ', useParams());

    const [product, setProduct] = React.useState();

    //we cant use async func directly in useEffect because it returns promise
    //but useEffect callback must return either nothing or 'unMount callback', so we just wrap our async to arrow f
    React.useEffect(() => {
        const fetchProductById = async () => {
            const url = new URL('https://65d7103d27d9a3bc1d7a0dda.mockapi.io/pizza_site');
            url.searchParams.append('id', id);
            try {
                const { data } = await axios.get(url);
                setProduct(data[0]); //product is array of 1 object, mokapi returns Arr

            } catch (error) {
                alert('error fetching pizza id ', id);
            }
        };
        fetchProductById();
    }, []);
    if (!product)
        return 'Загрузка...';
    return (

        <PizzaBlock key={123312} {...product} />
        // <>
        //     <h1>{product.title}</h1>
        //     <img src={product.imageUrl} alt={product.title} />
        //     <h4>{product.price}</h4>
        // </>
    )
}

export default ProductDetails