import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Router = () => {
    return (
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                </Routes>
            </Header>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;