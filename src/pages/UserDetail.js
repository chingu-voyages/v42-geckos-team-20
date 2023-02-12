import { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Context } from '../App.js';

import Catalog from '../components/Catalog';
import SubHeader from '../components/SubHeader';
import Pagination from '../components/Pagination';

import { Typography, Button, Stack } from '@mui/material'

export default function UserDetail() {
	const { userId } = useParams();

  const { session, products, users, pageStart, pageEnd } = useContext(Context);

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
					<Button component={Link} to={`/users/${userId}/add-product`} variant="contained">
					Add Product
				</Button>
				) : (
					<></>
				)}
			</Stack>

			<Catalog products={productsByPage} />

			<Pagination products={sellersProducts} />
	  </div>
	)
}
