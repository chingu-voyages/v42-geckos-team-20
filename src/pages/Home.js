import { useContext, useState } from 'react';
import { Context } from '../App.js';

import Catalog from '../components/Catalog.js';
import SubHeader from '../components/SubHeader';
import Pagination from '../components/Pagination';

const Home = () => {
  const { products, activeCategory, pageStart, pageEnd, searchWord } = useContext(Context);

  const [ currency, setCurrency ] = useState("€") //only a placeholder for now.

  const searchLower = searchWord.toLowerCase()

  const searchFilteredProducts = searchWord === "" ? (
    products
  ) : (
    products.filter((product) => (
      (
        product.name ? product.name.toLowerCase().includes(searchLower) : null
      ) || (
        product.description ? product.description.toLowerCase().includes(searchLower) : null
      ) || (
        product.seller.first_name ? product.seller.first_name.toLowerCase().includes(searchLower) : null
      )
    ))
  )

  const categoryFilteredProducts = activeCategory === "All" ? (
    searchFilteredProducts
  ) : (
    searchFilteredProducts.filter((product) => (
		product.categories.category.includes(activeCategory) || product.categories.subcategories.includes(activeCategory)
	)))

  const productsByPage = categoryFilteredProducts.slice(pageStart, pageEnd)

  return (
    <div className="Page">
      <SubHeader />
      
      <Catalog products={productsByPage} currency={currency} />

      <Pagination products={categoryFilteredProducts} />
    </div>
  )
}

export default Home;
