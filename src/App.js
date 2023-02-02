import { createContext, useContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { supabase } from './supabaseClient';

import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetail from './pages/productDetail';
import UserDetails from './pages/userDetails';
import Cart from './pages/Cart';
import SellersPage from './pages/SellerPage';

import Heading from './components/Heading';
import Footer from './components/Footer';
import AddProduct from './components/AddProduct';

export const Context = createContext({
  activeCategory: null,
  setActiveCategory: null,
  currentUser: null,
  setCurrentUser: null,
  products: null,
  categories: null,
  searching: null,
  setSearching: null
});

function App() {
  const [active, setActive] = useState("All");
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([{ id: null, name: null, price: null, images: ["#"], seller: { name: null } }]);
  const [categories, setCategories] = useState([]);
  const [searchStatus, setSearchStatus] = useState(false);

  console.log(user)

  async function getProducts() {
    const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      product_categories (
        categories (
          id,
          name
        ),
        subcategories (
          id,
          name
        )
      )
    `)

    setProducts(data.map((product) => Object.assign({ ...product, images: [""], seller: { name: null } })))
  }

  async function getCategories() {
    const { data, error } = await supabase
    .from('categories')
    .select('name')

    setCategories(data.map(category => category.name))
  }

  useEffect(() => {
    getProducts()
    getCategories()
  }, [])

  return (
    <Context.Provider 
      value={{ 
        activeCategory: active, 
        setActiveCategory: setActive, 
        currentUser: user,
        setCurrentUser: setUser,
        products: products,
        categories: categories,
        searching: searchStatus,
        setSearching: setSearchStatus
      }}
    >
      <div className="App">
        <Heading />
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/users/:userId" element={<UserDetails />} />
            <Route path="/seller/:sellerName" element={<SellersPage />}/>
            <Route path="/users/:userId/add-product" element={<AddProduct />} />
        </Routes>

        <Footer />
      </div>
     
    </Context.Provider>
  );
}

export default App;
