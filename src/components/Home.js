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
  const [ searchPattern , setSearchPattern] =useState(null)
  const [ currency, setCurrency ] = useState("€") //only a placeholder for now.
  const {searching, setSearching} =useContext(Context)
  
  useEffect(() =>{
    if(!searching){
      showSelectedCategory()
    }else if(searching){
      showSearchedResults()
    }
  },[activeCategory, searchPattern])

const showSelectedCategory = () =>{
  if(activeCategory === "All"){
    setFilteredProducts(products);
  }else
    setFilteredProducts(products.filter(product => product.categories.includes(activeCategory)));
}

const showSearchedResults = () =>{
  let compiledSearchResults = searchArray().flat()
  setFilteredProducts(removeDuplicates(compiledSearchResults));
  compiledSearchResults = [];
}
const searchArray  = () =>{
  let searchCategories = products.filter(product => product.categories.includes(searchPattern));
  let searchNames = products.filter(product => product.name.includes(searchPattern));
  let searchSellers = products.filter(product => product.seller.name.includes(searchPattern))
  return  [searchCategories, searchNames, searchSellers]
}
const removeDuplicates = (array) =>{
  const seen = new Set();
  return array.filter(item =>{
    const duplicate = seen.has(item.id);
    seen.add(item.id);
    return !duplicate
  });
}
  return (
    <>
     
      <SubHeader setSearchPattern={setSearchPattern}/>
      <Catalog  filteredProducts={filteredProducts} currency={currency} />
    </>
  )
}

export default Home;