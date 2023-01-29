import React, { useEffect } from 'react';
import { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Box, TextField, MenuItem,Button, InputAdornment} from '@mui/material'
import { Context } from '../App';
import products from '../data/products.json'



const AddProduct = () => {


    const INIT_STATE = {
        productName: "",
        description: "",
        price: "",
        images: "",
        undefined: "",
        label: ""
    }

    const CATEGORIES = [
        {
            value: "Clothes",
            label: "Clothes"
        },
        {
            value: "Electronics",
            label: "Electronics"
        },
        {
            value: "Accessories",
            label: "Accessories"
        },
        {
            value: "Bags",
            label: "Bags"
        }
    ]

    const [formData, setFormData] = useState(INIT_STATE);
    const [error, setError] = useState({text: null})
    const navigate = useNavigate();
    const {currentUser} = useContext(Context)
    const {userId} = useParams()
    console.log(currentUser)
    console.log(parseInt(userId))

    useEffect(() => {
        function checkUser() {
            if(currentUser.id !== parseInt(userId) || currentUser === null) {
                navigate('/')
            }
        }
       checkUser()
    }, [])



    const handleTextChange = (evt) => {
        const {id, value} = evt.target;
        setFormData(formData => ({
            ...formData, 
            [id]: value
        }))
        
    }

    

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        let len = products.length;
        let labels = formData.label.split(" ")
        let price = parseInt(formData.price)

        if(isNaN(price)) {
            setError({text: "Invalid Number"})
        }
        else {
            setError({text: null})
            let newProduct = {
                id: len + 1,
                name: formData.name,
                description: formData.description,
                price: price,
                seller: {
                    id: currentUser.id,
                    name: currentUser.username
                },
                images: [],
                category: formData.undefined,
                labels: labels
            }
            // alert('Added a new Product')
            // console.log(newProduct)

            fetch('../../public/data.json',
            {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: newProduct
            })
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
              })
              .catch((error) => {
                console.error('Error:', error);
              });
            setFormData(INIT_STATE)
        }
       
    }

    return (
        <Box 
      sx={{ 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "100vh"
      }}
    >
         <Box
            sx={{ 
                display: "flex", 
                flexDirection: "column", 
                width: "fit-content",
                top: "rem"
            }}
        >
            <TextField
                label="Product Name"
                value={formData.productName}
                onChange={handleTextChange}
                type="text"
                id="productName"
                margin="normal"
            />

            <TextField
                label="Product Description"
                value={formData.description}
                onChange={handleTextChange}
                type="text"
                id="description"
                margin="normal"
            />
            
            <TextField
                label="Product Price"
                value={formData.price}
                onChange={handleTextChange}
                type="text"
                id="price"
                error={error.text}
                helperText={error.text}
                margin="normal"
                InputProps={{startAdornment: (
                    <InputAdornment position='start'>
                        $
                    </InputAdornment>
                )}}
            />
            <TextField
                label="Product Category"
                value={formData.undefined}
                onChange={handleTextChange}
                select
                // defaultValue=""
                id="category"
                margin="normal"
            >
                {CATEGORIES.map(category => (
                    <MenuItem key={category.value} value={category.value}>
                        {category.label}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                label="Product Labels"
                value={formData.label}
                onChange={handleTextChange}
                type="text"
                id="label"
                margin="normal"
            />
             <Button 
          variant="contained"
          onClick={handleSubmit} 
          size="large"
          sx={{
            mt: "16px",
            pt: "15px",
            pb: "15px"
          }}
        >
          Add Product
        </Button>
        </Box>
    </Box>
    )
}


export default AddProduct;