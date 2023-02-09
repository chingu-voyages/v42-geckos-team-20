import { useContext,useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Context} from '../App.js';

import { showSearchResults } from '../Utility_Functions/searching_Utilities.js';

import products from '../data/products.json';

import Catalog from '../components/HomeCatalog';
import SubHeader from '../components/SubHeader';
import ProductPagination from '../components/ProductPagination';

import { Category } from '@mui/icons-material';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

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
		} else {
			setFilteredProducts(Sellersproducts.filter(product => product.categories.includes(activeCategory)));	  
		}
  }
  
	return (
	  <div className="Page">  
			<SubHeader setSearchPattern={setSearchPattern} />
			
			<Typography variant="h5" sx={{ ml: "40px" }} gutterBottom>
				{sellerName}'s Store
			</Typography>

			<Catalog filteredProducts={dataPage} currency={currency}/>
			
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
  export default SellersPage;
  