import './App.css';
import React, { useLayoutEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import HostCart from './Pages/HostCart';

const Home = lazy(() => import('./Pages/Home'));
const ProductDetail = lazy(() => import('./Pages/ProductDetail'));

const App = () => {

  useLayoutEffect(() => {
    document.body.style.backgroundColor = '#F0F3F6';
  });

  return <>
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<HostCart/>}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>
}

export default App
