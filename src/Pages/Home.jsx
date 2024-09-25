import React from 'react'
import ProductList from './ProductList'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return <>
    <br/><br/><br/><br/>
    <ProductList />
  </>
}

export default Home
