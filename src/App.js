import logo from './logo.svg';
import './App.css';

import Catalog from './components/Catalog.js';
import Heading  from './components/Heading.js';

import products from './data/products'

// get an array of categories from products json
const categories = products.map(product => product.categories).flat()
const uniqueCategories = [...new Set(categories)]
console.log(uniqueCategories)

function App() {
  return (

    <div className="App">
      <Heading />
      <Catalog />
    </div>
  );
}

export default App;
