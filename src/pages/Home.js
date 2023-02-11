import { useContext,useState, useEffect } from 'react';
import { Context } from '../App.js';
import ProductPagination from '../Utility_Functions/ProductPagination';

import Catalog from '../components/Catalog.js';
import SubHeader from '../components/SubHeader';
import Pagination from '../components/Pagination';

const Home = () => {
  const { products, activeCategory, pageStart, pageEnd } = useContext(Context);

  const [ currency, setCurrency ] = useState("€") //only a placeholder for now.

  const filteredProducts = products.filter((product) => (
		product.categories.category.includes(activeCategory) || product.categories.subcategories.includes(activeCategory)
	))

  const productsByCategory = activeCategory === "All" ? (
    products
  ) : (
    filteredProducts
  )

  const productsByPage = productsByCategory.slice(pageStart, pageEnd)

  return (
    <div className="Page">
      <SubHeader />
      
      <Catalog products={productsByPage} currency={currency} />

      <Pagination products={productsByCategory} />
    </div>
  )
}

export default Home;
