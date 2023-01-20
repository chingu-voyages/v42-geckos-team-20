import { createContext, useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Heading from './components/Heading';

import Home from './components/Home';
import Login from './components/Login';

import products from './data/products'
import ProductDetail from './pages/productDetail';
import UserDetails from './pages/userDetails';

export const Context = createContext({
  activeCategory: null,
  setActiveCategory: null
});

function App() {
  const [active, setActive] = useState("All");

  return (
    <Context.Provider 
      value={{ 
        activeCategory: active, 
        setActiveCategory: setActive 
      }}
    >
      <div className="App">
        <Heading/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/users/:userId" element={<UserDetails />} />
      </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
