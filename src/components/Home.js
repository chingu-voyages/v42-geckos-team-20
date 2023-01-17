import {useState, useEffect} from 'react';
import Catalog from './Catalog.js';
import Heading  from './Heading.js';
import SubHeader from './SubHeader.js';
import products from '../data/products.json';
import { Category } from '@mui/icons-material';


const Home = () => {

  const [ category, setCategory ] = useState("All Products");
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  const [ currency, setCurrency ] = useState("€")

  useEffect(() =>{
    if(category ==="All Products"){
      setFilteredProducts(products.map(product =>product));
    }else
      setFilteredProducts(products.filter(product => product.categories.includes(category)));
  },[category])

  const handleFilterClick = (e) =>{
    e.preventDefault();
    const selectedCategory = e.target.textContent
    setCategory(selectedCategory)
  }

  return (
    <>
      <Heading />
      <SubHeader handleFilterClick={handleFilterClick}/>
      <Catalog filteredProducts={filteredProducts} currency={currency} />
    </>
  )
}

export default Home;