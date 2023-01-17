import {useState, useEffect} from 'react';
import Catalog from './Catalog.js';
import Heading  from './Heading.js';
import SubHeader from './SubHeader.js';
import products from '../data/products.json';
import { Category } from '@mui/icons-material';


const Home = () => {

  const [ category, setCategory ] = useState("allProducts");
  const [ filteredProducts, setFilteredProducts ] = useState([]);

  useEffect(() =>{
    if(category ==="allProducts"){
      setFilteredProducts(products.map(product =>product));
    }else
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