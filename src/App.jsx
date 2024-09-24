import './App.css';
import React, { useLayoutEffect } from 'react'
import Home from './Pages/Home'

const App = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = '#F0F3F6';
  });
  return <Home/>
}

export default App
