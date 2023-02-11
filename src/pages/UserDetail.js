import { useContext,useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Context } from '../App.js';

import { showSearchResults } from '../Utility_Functions/searching_Utilities.js';

import Catalog from '../components/Catalog';
import SubHeader from '../components/SubHeader';
import Pagination from '../components/Pagination';

import { Typography, Button, Stack } from '@mui/material'

const SellersPage = () => {
	const { userId } = useParams();
	console.log(userId)

  const { session, products, users, activeCategory, pageStart, pageEnd } = useContext(Context);

	const [ currency, setCurrency ] = useState("€") //only a placeholder for now.

	const [sellersProducts, setSellersProducts ] = useState([]);
	const [seller, setSeller] = useState(null)

	useEffect(() => {
		setSellersProducts(products.filter((product) => (
			product.seller.id === userId
		)))

		setSeller(users.find((user) => user.id === userId))
	}, [userId])

  const productsByPage = sellersProducts.slice(pageStart, pageEnd)
  
	return (
	  <div className="Page">  
			{/* <SubHeader /> */}
			
			<Stack direction="row" sx={{ width: "100%", padding: "10px 40px" }}>
				{seller ? (
					<Typography variant="h5" sx={{ flexGrow: 1 }} gutterBottom>
						{seller.first_name}'s Store
					</Typography>
				) : (
					<></>
				)}

				{session && userId === session.user.id ? (
					<Button component={Link} to={`/users/${seller.id}/add-product`} variant="contained">
					Add Product
				</Button>
				) : (
					<></>
				)}
			</Stack>

			<Catalog products={productsByPage} currency={currency} />

			<Pagination products={sellersProducts} />
	  </div>
	)
  }
  export default SellersPage;
  
