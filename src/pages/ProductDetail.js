import { useContext } from "react";
import { useParams, Link } from 'react-router-dom';
import { Context } from '../App';

import AddToCartButton from '../components/AddToCartButton';
import Counter from '../components/Counter';

import { Box, Card, CardContent, Typography, Breadcrumbs } from '@mui/material';

function ProductDetail() {
  const { products, currency } = useContext(Context);
  const { productId } = useParams();
  const thisProduct = products.find((product) => String(product.id) === productId);

  

  if (!thisProduct) return null;

  console.log(thisProduct.categories)


  // useEffect(() => {
  //   const storedCart = JSON.parse(localStorage.getItem('cart'));
  //   if(storedCart){
  //     setCart(storedCart)
  //   }
  // }, [])

  return (
    <div className="Page">
      <Breadcrumbs 
        id="breadcrumbs"
        aria-label="breadcrumbs"
        sx={{ 
          ml: "40px", 
          pt: 2, 
          color: "text.secondary",
          "ol li:last-child p": {
            color: "text.primary"
          } 
        }}
      >
        <Typography>{thisProduct.categories.category}</Typography>
        {thisProduct.categories.subcategories.map((subcategory) => (
          <Typography key={subcategory}>{subcategory}</Typography>
        ))}
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
            src={thisProduct.images[0].url}
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
                {/* <Typography variant="subtitle1" color="text.secondary">
                  {thisProduct.seller.name}
                </Typography> */}
                <Typography 
                  variant="subtitle1" 
                  color="text.secondary" 
                  component={Link} 
                  to={`/users/${thisProduct.seller.id}`}
                >
                  {thisProduct.seller.first_name}
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
                  {currency} {thisProduct.price.toFixed(2)}
                </Typography>

                <Counter />
              </Box>

              <AddToCartButton product={thisProduct}/>
            </CardContent>
          </Card>
        </Box>
      </Box>     
    </div>
  )
};


export default ProductDetail;