import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';

import products from './data/products'

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
      </Routes>
    </div>
  );
}

export default App;
