//These are used for searchbar functionality and are called in Home and Seller's pages on their UseEffect().

export const showSearchResults = (arrayToSearch, setter, searchPattern) =>{
	setter(removeDuplicates(searchArray(arrayToSearch,searchPattern)));
}
const searchArray  = (arrayToSearch, searchPattern) =>{
	let searchCategories = arrayToSearch.filter(product => searchPattern.test(product.categories));
	let searchNames = arrayToSearch.filter(product => searchPattern.test(product.name));
	let searchSellers = arrayToSearch.filter(product => searchPattern.test(product.seller.name));
	let compiledSearchResults = [searchCategories, searchNames, searchSellers]
	return  compiledSearchResults.flat()
}

const removeDuplicates = (array) =>{
	const seen = new Set();
	return array.filter(item =>{
	  const duplicate = seen.has(item.id);
	  seen.add(item.id);
	  return !duplicate
	});
}