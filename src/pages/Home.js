import { useContext,useState, useEffect } from 'react';
import { Context } from '../App.js';
import ProductPagination from '../components/ProductPagination';

import Catalog from '../components/Catalog.js';
import Heading  from '../components/Heading.js';
import SubHeader from '../components/SubHeader';

import products from '../data/products.json';

import { Category } from '@mui/icons-material';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Home = () => {
  const { activeCategory, setActiveCategory } = useContext(Context);
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  const [ currency, setCurrency ] = useState("€") //only a placeholder for now.
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
    if(activeCategory === "All"){
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.categories.includes(activeCategory)));

       handleChange(1,1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, count])

  return (
    <>
      <SubHeader  />
      
      <Catalog filteredProducts={dataPage} currency={currency} />
      <Stack spacing={2} alignItems="center" marginTop="2%">
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Stack>
    </>
  )
}

export default Home;