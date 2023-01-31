import { createContext, useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Heading from './components/Heading';

import Home from './components/Home';
import Login from './components/Login';

import products from './data/products'
import ProductDetail from './pages/productDetail';
import UserDetails from './pages/userDetails';
import Cart from './pages/Cart';
import Footer from './components/Footer';


export const Context = createContext({
  activeCategory: null,
  setActiveCategory: null,
  currentUser: null,
  setCurrentUser: null,
  searching: null,
  setSearching: null
});


function App() {
  const [active, setActive] = useState("All");
  const [user, setUser] = useState(null);
  const [searchStatus, setSearchStatus] = useState(false);

  return (
    <Context.Provider 
      value={{ 
        activeCategory: active, 
        setActiveCategory: setActive, 
        currentUser: user,
        setCurrentUser: setUser,
        searching: searchStatus,
        setSearching: setSearchStatus
      }}
    >
      <div className="App">
        <Heading/>
        
       
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/users/:userId" element={<UserDetails />} />
      </Routes>

      <Footer />
      </div>
     
    </Context.Provider>
  );
}

export default App;
