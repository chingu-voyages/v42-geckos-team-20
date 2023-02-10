import { useContext,useState, useEffect } from 'react';
import { Context } from '../App.js';
import { showSearchResults } from '../Utility_Functions/searching_Utilities.js';

import Catalog from './Catalog.js';
import SubHeader from './SubHeader.js';

const Home = () => {
  const { activeCategory, setActiveCategory } = useContext(Context);
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  const [ searchPattern , setSearchPattern] =useState(null)
  const [ currency, setCurrency ] = useState("€") //only a placeholder for now.
  const {searching, setSearching} =useContext(Context)

  useEffect(() =>{
    if(!searching) {
      showSelectedCategory()
    } else if(searching) {
      showSearchResults(filteredProducts, setFilteredProducts,searchPattern)
    }
  },[activeCategory, searchPattern])

  return (
    <div className="Page">
      <SubHeader setSearchPattern={setSearchPattern} /> 

      <Catalog currency={currency} />
    </div>
  )
}

export default Home;
