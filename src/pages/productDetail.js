import React from 'react';
import { useParams } from 'react-router-dom';

import AddToCartButton from '../components/AddToCartButton';
import Counter from '../components/Counter';

import products from '../data/products.json';

import { Box, Card, CardContent, Typography, Breadcrumbs, Link } from '@mui/material';

function ProductDetail() {
  const { productId } = useParams();
  const thisProduct = products.find((product) => String(product.id) === productId);

  if (!thisProduct) return null;

  return (
    <>
      <Breadcrumbs 
        id="breadcrumbs"
        aria-label="breadcrumbs"
        sx={{ ml: 2, mt: "64px", pt: 2 }}
      >
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        {thisProduct.categories.map(category =>
          <Link
            underline="none"
            color="inherit"
            key={category}
          >
            {category}
          </Link>
        )}
      </Breadcrumbs>

      <Box 
        sx={{ 
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box 
          id="product-detail"
          sx={{ 
            display: "flex",
            alignItems: "stretch",
            margin: 4,
            gap: 2,
            maxWidth: "900px"
          }}
        >
          <img
            src={thisProduct.images[0]}
            alt={thisProduct.name} 
          />

          <Card>
            <CardContent 
              sx={{ 
                height: "100%", 
                display: "flex", 
                flexDirection: "column",
                justifyContent: "space-between" 
              }}
            >
              <Box>
                <Typography variant="subtitle1" color="text.secondary">
                  {thisProduct.seller.name}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {thisProduct.name}
                </Typography>
                <Typography variant="body1" paragraph>
                  {thisProduct.description}
                </Typography>
              </Box>

              <Box 
                sx={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center", 
                  mb: '1.5em' 
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  $ {thisProduct.price.toFixed(2)}
                </Typography>

                <Counter />
              </Box>

              <AddToCartButton />
            </CardContent>
          </Card>
        </Box>
      </Box>     
    </>
  )
};


export default ProductDetail;