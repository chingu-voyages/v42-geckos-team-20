import React from 'react';
import Heading  from '../components/Heading';
import products from '../data/products.json';
//import Breadcrumbs from '../components/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ButtonLarge from '../components/ButtonLarge';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import Counter from '../components/Counter';


function ProductDetail() {
  const { productId } = useParams();
   const thisProduct = products.find((product) => String(product.id) === productId);
    console.log('thisProduct', thisProduct);
    if (!thisProduct) return null;
      return (
      <>
      <div className="App">
       <Heading />
      </div>
          <div role="presentation" id="breadCrumbs" style={{ marginTop: '90px' }} >
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
              {thisProduct.categories.map(category =>
            <Link
              underline="none"
              color="inherit"
              key={thisProduct.categories}
            >
              {category}
            </Link>
              )}
          </Breadcrumbs>
        </div>
       <Box sx={{ width: '75%', margin:'auto' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <ImageList sx={{  objectFit: 'fill' }} cols={1}>
                <ImageListItem key={thisProduct.images[0]}>
                  <img
                    src={thisProduct.images}
                    alt={thisProduct.images} 
                  />
                </ImageListItem>
              </ImageList>
            </Grid>
          <Grid item xs={6}>
            <Card sx={{ marginTop: '1.2em' }}>
              <CardContent>
                <Typography sx={{ mb: '1.2em' }} color="text.secondary">
                  {thisProduct.seller.name}
                </Typography>
                <Typography sx={{ mb: '1.2em' }} fontSize="1.4em" component="div" key={thisProduct.name}>
                  {thisProduct.name}
                </Typography>
                <Typography sx={{ mb: '1.5em' }} key={thisProduct.description} fontSize="0.8em">
                  {thisProduct.description}
                </Typography>

                <Box 
                  sx={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    mb: '1.5em' 
                  }}
                >
                  <Typography fontSize="1.2em" color="text.secondary">
                    $ {thisProduct.price.toFixed(2)}
                  </Typography>
                  <Counter />
                </Box>

                <ButtonLarge />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>     
    </>
  )
};


export default ProductDetail;