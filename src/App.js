import React from 'react';
import './scss/app.scss'
import Header from './components/Header';


import { Routes, Route } from 'react-router-dom'

// import pizzas from './assets/pizzas.json'
import axios from 'axios';
import Skeleton from './components/PizzaBlock/skeleton';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

// export const AppContext = React.createContext(''); //we use Redux
export const testoArr = ['тонкое', 'традиционное'];

function App() {

  return (
    <div className="wrapper">
      {/* <AppContext.Provider value={{ searchValue, searchValueUpdate }}> */}
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>


        </div>
      </div>


    </div>


  );
}

export default App;
