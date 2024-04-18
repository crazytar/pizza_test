import React from 'react'
import NotFoundBlock from '../components/NotFoundBlock';
import { Link } from 'react-router-dom';

import { FaRegTrashAlt } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { GrClose } from 'react-icons/gr';

import { addToCart, clearCart, remFromCart } from '../redux/cartSlice'

const Cart = () => {
    return (
        <>
            <div class="container container--cart">
                <div class="cart">
                    <div class="cart__top">
                        <h2 class="content__title">
                            <CiShoppingCart />
                            Корзина</h2>
                        <div class="cart__clear">
                            <FaRegTrashAlt />
                            <span>Очистить корзину</span>
                        </div>
                    </div>
                    <div class="cart__item">
                        <div class="cart__item-img">
                            <img
                                class="pizza-block__image"
                                src="/img/pizzas/1.jpg"
                                alt="Pizza"
                            />
                        </div>
                        <div class="cart__item-info">
                            <h3>Сырный цыпленок</h3>
                            <p>тонкое тесто, 26 см.</p>
                        </div>
                        <div class="cart__item-count">
                            <div class="button button--outline button--circle cart__item-count-minus">

                                <FiMinus />

                            </div>
                            <b>2</b>
                            <div class="button button--outline button--circle cart__item-count-plus">
                                <FiPlus />

                            </div>
                        </div>
                        <div class="cart__item-price">
                            <b>770 ₽</b>
                        </div>
                        <div class="cart__item-remove">
                            <div class="button button--outline button--circle">
                                <GrClose />

                            </div>
                        </div>
                    </div>
                    <div class="cart__bottom">
                        <div class="cart__bottom-details">
                            <span> Всего пицц: <b>3 шт.</b> </span>
                            <span> Сумма заказа: <b>900 ₽</b> </span>
                        </div>
                        <div class="cart__bottom-buttons">
                            <Link to="/" class="button button--outline button--add go-back-btn">
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <span>Вернуться назад</span>
                            </Link>
                            <div class="button pay-btn">
                                <span>Оплатить сейчас</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Cart;