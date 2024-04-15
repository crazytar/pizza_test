import PizzaLogo from '../assets/img/pizza-logo.svg'
import { Link } from 'react-router-dom';
import SearchBlock from './SearchBlock';
import { BsCart } from "react-icons/bs";
import { useState } from 'react';
function Header() {
    return (
        <div className="header">
            <div className="container">
                <Link to="/" className="header__logo">
                    <img width="38" src={PizzaLogo} alt="Pizza logo" />
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </Link>
                <SearchBlock />
                <div className="header__cart">
                    <Link to="/cart" className="button button--cart">
                        <span>520 ₽</span>
                        <div className="button__delimiter"></div>
                        <BsCart />
                        <span>3</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;