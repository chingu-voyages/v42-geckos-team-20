import { createContext, useContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Heading from './components/Heading';

import Home from './components/Home';
import Login from './components/Login';

import products from './data/products'
import ProductDetail from './pages/productDetail';
import UserDetails from './pages/userDetails';
import Cart from './pages/Cart';

import { supabase } from './data/supabaseClient'; 

export const Context = createContext({
  activeCategory: null,
  setActiveCategory: null,
  currentUser: null,
  setCurrentUser: null
});


function App() {
  const [active, setActive] = useState("All");
  const [user, setUser] = useState(null);

  console.log(user)

  async function getProducts() {
    const { data, error, status } = await supabase.from('products').select('*')
    console.log(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Context.Provider 
      value={{ 
        activeCategory: active, 
        setActiveCategory: setActive, 
        currentUser: user,
        setCurrentUser: setUser
      }}
    >
      <div className="App">
        <Heading/>
        
        <Heading/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/users/:userId" element={<UserDetails />} />
      </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
