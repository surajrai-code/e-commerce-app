import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ProductDetailPage from './Components/ProductDetailPage';
import CartPage from './Components/CartPage';
import CheckoutPage from './Components/CheckoutPage';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
