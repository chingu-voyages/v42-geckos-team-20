import {useState, useEffect} from 'react';
import Catalog from './Catalog.js';
import Heading  from './Heading.js';
import SubHeader from './SubHeader.js';
import products from '../data/products.json';
import { Category } from '@mui/icons-material';


const Home = () => {

  const [ category, setCategory ] = useState("Clothes");
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  
  useEffect(() =>{
    setFilteredProducts(products.filter(product => product.categories.includes(category)));
  },[category])

  return (
    <>
      <Heading />
      <SubHeader />
      
      <Catalog filteredProducts={filteredProducts} />
    </>
  )
}

export default Home;