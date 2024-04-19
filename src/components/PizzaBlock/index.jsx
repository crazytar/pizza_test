import { useState, useRef } from "react";

import { GrAdd } from "react-icons/gr";
import { MdAdd } from "react-icons/md";
import { GrFormSubtract } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import styles from './PizzaBlock.module.scss';
import { testoArr } from "../../App";

const PizzaBlock = ({ id, title, price, priceDeltaSize, imageUrl, sizes, types }) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const [activeType, setactiveType] = useState(0);
    const [activeSize, setactiveSize] = useState(0);//0,1,2
    var pizza_price = useRef(price);

    function onClickButtonAdd() {
        setCount(prev => prev + 1);
        const itemToRedux = {
            id,
            title,
            price: pizza_price.current,
            imageUrl,
            type: types[activeType],
            size: sizes[activeSize]
        }
        dispatch(addToCart(itemToRedux));
    }
    function onClickButtonRemove() {
        if (count > 0)
            setCount(prev => prev - 1);
        else setCount(0);

    }
    function onChangeSize(sizeIndex) {
        //depending on pizza size we calc price
        pizza_price.current = price + priceDeltaSize * sizeIndex;
        setactiveSize(sizeIndex);

    }
    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt={title}
            />
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        types.map((type, index) => {
                            return (
                                <li key={index} onClick={() => setactiveType(type)}
                                    className={activeType === type ? 'active' : ''}>{testoArr[Number(type)]}</li>)
                        })
                    }
                    {/* <li className="active">тонкое</li>
                    <li>традиционное</li> */}
                </ul>
                <ul>
                    {
                        sizes.map((size, index) => {
                            return (
                                <li key={index} onClick={() => onChangeSize(index)}
                                    className={activeSize === index ? 'active' : ''}>{size} см.</li>)
                        })
                    }
                    {/* <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li> */}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {pizza_price.current} ₽</div>
                <div className="button button--outline button--add" onClick={onClickButtonAdd}>
                    {/* <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"></path>
                        </svg> */}
                    <span>Добавить</span>
                    <i>{count}</i>
                </div>
                {/* <div className={styles.add__remove_button} onClick={onClickButtonAdd}>
                    <GrAdd />
                </div>
                <div className={styles.add__remove_button} onClick={onClickButtonRemove}>
                    <GrFormSubtract />
                </div>
                <i>{count}</i> */}
            </div>
        </div>
    );
}

export default PizzaBlock;