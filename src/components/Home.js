import {useContext,useState, useEffect, useCallback} from 'react';
import Catalog from './Catalog.js';
import Heading  from './Heading.js';
import SubHeader from './SubHeader.js';
import products from '../data/products.json';
import { Category } from '@mui/icons-material';
import {Context} from '../App.js';
import ProductPagination from './ProductPagination';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const Home = () => {
  const { activeCategory, setActiveCategory } = useContext(Context);
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  const [ searchPattern , setSearchPattern] =useState(null)
  const [ currency, setCurrency ] = useState("€") //only a placeholder for now.
  const {searching, setSearching} =useContext(Context)
  const [ page, setPage ] = useState(1);
  const PER_PAGE = 5;
  

  const count = Math.ceil(filteredProducts.length / PER_PAGE);
  const dataPage = ProductPagination(filteredProducts, PER_PAGE);
  

  const handleChange = (e, p) => {
    setPage(p);
    dataPage.jump(p);
    console.log('handleChange', handleChange);
  };



  useEffect(() =>{
    if(!searching){
      showSelectedCategory()
    }else if(searching){
      showSearchedResults(filteredProducts)
    }
    handleChange(1,1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[activeCategory, searchPattern, count])

const showSelectedCategory = () =>{
  if(activeCategory === "All"){
    setFilteredProducts(products);
  }else {
    setFilteredProducts(products.filter(product => product.categories.includes(activeCategory)));
  }
  
}

const showSearchedResults = (arrayToSearch) =>{
  let compiledSearchResults = searchArray(arrayToSearch).flat()
  setFilteredProducts(removeDuplicates(compiledSearchResults));
}
const searchArray  = (arrayToSearch) =>{
  let searchCategories = arrayToSearch.filter(product => searchPattern.test(product.categories));
  let searchNames = arrayToSearch.filter(product => searchPattern.test(product.name));
  let searchSellers = arrayToSearch.filter(product => searchPattern.test(product.seller.name));
  return  [searchCategories, searchNames, searchSellers]
}

  return (
    <>

      <SubHeader setSearchPattern={setSearchPattern} />
      
      <Catalog  filteredProducts={dataPage} currency={currency}/>
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

//helper function doesn't need to be defined in Compoenent and therefore redefined on each re-render
const removeDuplicates = (array) =>{
  const seen = new Set();
  return array.filter(item =>{
    const duplicate = seen.has(item.id);
    seen.add(item.id);
    return !duplicate
  });
}
export default Home;
