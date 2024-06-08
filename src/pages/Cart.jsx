import React from 'react'
import NotFoundBlock from '../components/NotFoundBlock';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { FaRegTrashAlt } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { GrClose } from 'react-icons/gr';
import { testoArr } from '../App';
import { selectCart } from '../redux/cartSlice'

import { addToCart, clearCart, remFromCart, decrementCount } from '../redux/cartSlice'

const Cart = () => {
    const { totalMoney, totalPizzas, items } = useSelector(selectCart);
    const dispatch = useDispatch();

    const onClickRemove = (index) => {
        dispatch(remFromCart(index));
    }
    function onClickPlus(obj) {
        dispatch(addToCart(obj));
    }
    function onClickMinus(index) {
        dispatch(decrementCount(index));


    }
    function onClickClear() {
        dispatch(clearCart());
    }
    // console.log(totalMoney, totalPizzas, items);
    return (
        <>
            <div className="container container--cart">
                <div className="cart">
                    <div className="cart__top">
                        <h2 className="content__title">
                            <CiShoppingCart />
                            Корзина</h2>
                        <div onClick={onClickClear} className="cart__clear">
                            <FaRegTrashAlt />
                            <span>Очистить корзину</span>
                        </div>
                    </div>
                    {items.map((obj, index) => {
                        return (
                            <div className="cart__item">
                                <div className="cart__item-img">
                                    <img
                                        className="pizza-block__image"
                                        src={obj.imageUrl}
                                        alt={obj.title}
                                    />
                                </div>
                                <div className="cart__item-info">
                                    <h3>{obj.title}</h3>
                                    <p>{testoArr[obj.type]} тесто, {obj.size} см.</p>
                                </div>
                                <div className="cart__item-count">
                                    <div onClick={() => onClickMinus(index)} className="button button--outline button--circle cart__item-count-minus">

                                        <FiMinus />

                                    </div>
                                    <b>{obj.count}</b>
                                    <div onClick={() => onClickPlus(obj)} className="button button--outline button--circle cart__item-count-plus">
                                        <FiPlus />

                                    </div>
                                </div>
                                <div className="cart__item-price">
                                    <b>{obj.price * obj.count} ₽</b>
                                </div>
                                <div onClick={(/*if we pass arg, it's event */) => onClickRemove(index)} className="cart__item-remove">
                                    <div className="button button--outline button--circle">
                                        <GrClose />

                                    </div>
                                </div>
                            </div>)
                    })}
                    <div className="cart__bottom">
                        <div className="cart__bottom-details">
                            <span> Всего пицц: <b>{totalPizzas} шт.</b> </span>
                            <span> Сумма заказа: <b>{totalMoney} ₽</b> </span>
                        </div>
                        <div className="cart__bottom-buttons">
                            <Link to="/" className="button button--outline button--add go-back-btn">
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span>Вернуться назад</span>
                            </Link>
                            <div className="button pay-btn">
                                <span>Оплатить сейчас</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}
export default Cart;