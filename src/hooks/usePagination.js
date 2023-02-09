import { useState, useContext } from 'react';
import { Context } from '../App.js';


const usePagination = (itemsPerPage, filteredProducts) => {
  const { products, activeCategory } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  let maxPage;

  if (activeCategory === 'All') {
    maxPage = Math.ceil(products.length / itemsPerPage);
  } else {
    maxPage = Math.ceil(filteredProducts.length / itemsPerPage);
  }

  function currentData() {
    const begin = (currentPage -1) * itemsPerPage;
    const end = begin + itemsPerPage;
    console.log('currentData****', filteredProducts)

    return filteredProducts.slice(begin, end);
  }

  function allData() {
    const begin = (currentPage -1) * itemsPerPage;
    const end = begin + itemsPerPage;
    console.log('allData****', products)

    return products.slice(begin, end);
  }

  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage -1, 1))};

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, allData, currentPage, maxPage };
  
}


export default usePagination;