import { useContext, useState, useEffect } from 'react';
import { Context } from '../App';
import Catalog from '../components/Catalog.js';
import Heading  from '../components/Heading.js';
import SubHeader from '../components/SubHeader.js';
import { Category } from '@mui/icons-material';


const Home = () => {
  const { activeCategory, setActiveCategory, products, categories } = useContext(Context);
  const [ filteredProducts, setFilteredProducts ] = useState(products);
  const [ currency, setCurrency ] = useState("€"); // only a placeholder for now
  
  useEffect(() => {
    if(activeCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => (
        product.product_categories[0].categories.name === activeCategory
      )));
    }
  }, [products, activeCategory])

  return (
    <>
      <SubHeader />
      <Catalog filteredProducts={filteredProducts} currency={currency} />
    </>
  )
}

export default Home;