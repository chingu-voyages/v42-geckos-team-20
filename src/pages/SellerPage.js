import {useContext,useState, useEffect, useCallback} from 'react';
import Catalog from '../components/Catalog';
import Heading  from '../components/Heading';
import SubHeader from '../components/SubHeader';
import products from '../data/products.json';
import { Category } from '@mui/icons-material';
import {Context} from '../App.js';
import ProductPagination from '../components/ProductPagination';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom';
import {showSearchResults} from '../Utility_Functions/searching_Utilities.js';

const SellersPage = () => {
	const { sellerName } = useParams();
	const [Sellersproducts, setSellersProducts ] =useState(products.filter(product => product.seller.name.includes(sellerName)));
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
		console.log(`e: ${e}`);
		console.log(`p: ${p}`);
	  setPage(p);
	  dataPage.jump(p);
	};
  
  
  
	useEffect(() =>{
	  if(!searching){
		showSelectedCategory()
	  }else if(searching){
		showSearchResults(filteredProducts,setFilteredProducts,searchPattern)
	  }
	  handleChange(1,1);
	},[activeCategory, searchPattern, count])
  
  const showSelectedCategory = () =>{
	if(activeCategory === "All"){
	  setFilteredProducts(products.filter(product => product.seller.name.includes(sellerName)));
	}else {
	  setFilteredProducts(Sellersproducts.filter(product => product.categories.includes(activeCategory)));	  
	}
  }
  
	return (
	  <>
  
		<SubHeader setSearchPattern={setSearchPattern} />
		<h1>{`${sellerName}'s page!`}</h1>
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
  export default SellersPage;
  