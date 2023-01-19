import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';

import products from './data/products'
import ProductDetail from './pages/productDetail';
import Cart from './pages/Cart';


// get an array of categories from products json
const categories = products.map(product => product.categories).flat()
const uniqueCategories = [...new Set(categories)]
console.log(uniqueCategories)

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
