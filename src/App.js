import { createContext, useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';

import products from './data/products'
import ProductDetail from './pages/productDetail';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
