import { useContext,useState, useEffect } from 'react';
import { Context } from '../App.js';
import { showSearchResults } from '../Utility_Functions/searching_Utilities.js';

import Catalog from './Catalog.js';
import SubHeader from './SubHeader.js';
import products from '../data/products.json';

import ProductPagination from './ProductPagination';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Home = () => {
  const { activeCategory, setActiveCategory } = useContext(Context);
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  const [ searchPattern , setSearchPattern] = useContext(Context);
  const [ currency, setCurrency ] = useState("€") //only a placeholder for now.
  const {searching, setSearching} =useContext(Context)
  const [ page, setPage ] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(filteredProducts.length / PER_PAGE);
  const dataPage = ProductPagination(filteredProducts, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    dataPage.jump(p);
  };

  useEffect(() =>{
    if(!searching){
      showSelectedCategory()
    }else if(searching){
      showSearchResults(filteredProducts, setFilteredProducts,searchPattern)
    }
    handleChange(1,1);
  },[activeCategory, searchPattern, count])

  const showSelectedCategory = () =>{
    if(activeCategory === "All"){
      setFilteredProducts(products);
    }else {
      setFilteredProducts(products.filter(product => product.categories.includes(activeCategory)));
    }  
  }

  return (
    <div className="Page">
      <SubHeader /> 

      <Catalog  filteredProducts={dataPage} currency={currency}/>
      
      <Stack spacing={2} alignItems="center" marginTop="2%">      
        <Pagination
          size="large"
          color="primary"
          count={count}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </div>
  )
}

export default Home;
