
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componetnt/Navbar';
import Product from './Componetnt/Product';
import Productdetail from './Componetnt/Productdetail';
import Cart from './Componetnt/Cart';
import Searchitem from './Componetnt/Searchitem';
import { items } from './Componetnt/Data';
function App() {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route path='/' element={<Product cart={cart} setCart={setCart} items={data} />} />
          <Route path='/product/:id' element={<Productdetail cart={cart} setCart={setCart} />} />
          <Route path='/search/:term' element={<Searchitem />} cart={cart} setCart={setCart} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
