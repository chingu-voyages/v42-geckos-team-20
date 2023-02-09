import { useContext,useState, useEffect } from 'react';
import { Context } from '../App.js';
import usePagination from '../hooks/usePagination.js';
import Catalog from '../components/HomeCatalog.js';
import SubHeader from '../components/SubHeader';

import products from '../data/products.json';

const Home = () => {
  const { activeCategory, setActiveCategory } = useContext(Context);
  const [ filteredProducts, setFilteredProducts ] = useState([]);
  const [ currency, setCurrency ] = useState("€") //only a placeholder for now.
  

  useEffect(() => {
    if(activeCategory === "All"){
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.categories.includes(activeCategory)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory])

  return (
    <>
      <SubHeader  />
      <Catalog currency={currency} />
    </>
  )
}

export default Home;
