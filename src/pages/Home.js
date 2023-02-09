import { useContext,useState, useEffect } from 'react';
import { Context } from '../App.js';
import ProductPagination from '../components/ProductPagination';

import Catalog from '../components/Catalog.js';
import SubHeader from '../components/SubHeader';



import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { showSearchResults } from '../Utility_Functions/searching_Utilities.js';

const Home = () => {
  const { products }= useContext(Context);
  const { activeCategory } = useContext(Context);
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  const { searching } = useContext(Context);
  const { searchPattern } = useContext(Context);
  const [ currency ] = useState("€") //only a placeholder for now.
  const [ page, setPage ] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(filteredProducts.length / PER_PAGE);
  const dataPage = ProductPagination(filteredProducts, PER_PAGE);
  
  const handleChange = (e, p) => {
    setPage(p);
    dataPage.jump(p);
    console.log('handleChange', handleChange);
  };

  useEffect(() => {
    if(!searching){
      showSelectedCategory()
    }else if(searching){
      showSearchResults(products, setFilteredProducts, searchPattern)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, searchPattern, count])
  
  const showSelectedCategory = () =>{
    if(activeCategory === "All"){
      setFilteredProducts(products);
    }else {
      setFilteredProducts(products.filter(product => product.categories.includes(activeCategory)));
    }  
  }

  return (
    <>
      <SubHeader  />
      
      <Catalog filteredProducts={dataPage} currency={currency} />

      <Stack spacing={2} alignItems="center" marginTop="2%">
        <Pagination
          size="large"
          color="primary"
          count={count}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </>
  )
}

export default Home;
