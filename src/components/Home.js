import {useContext,useState, useEffect} from 'react';
import Catalog from './Catalog.js';
import Heading  from './Heading.js';
import SubHeader from './SubHeader.js';
import products from '../data/products.json';
import { Category } from '@mui/icons-material';
import {Context} from '../App.js';


const Home = () => {
  const { activeCategory, setActiveCategory } = useContext(Context);
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  const [ currency, setCurrency ] = useState("€") //only a placeholder for now.
  
  useEffect(() =>{
    if(activeCategory === "All"){
      setFilteredProducts(products);
    }else
      setFilteredProducts(products.filter(product => product.categories.includes(activeCategory)));
  },[activeCategory])

  return (
    <>
     
      <SubHeader />
      <Catalog filteredProducts={filteredProducts} currency={currency} />
    </>
  )
}

export default Home;