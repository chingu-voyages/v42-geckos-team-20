import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../App';

import { Box, TextField, MenuItem,Button, InputAdornment } from '@mui/material';

import products from '../data/products.json';

const AddProduct = () => {

    const INIT_STATE = {
        productName: "",
        description: "",
        price: "",
        images: "",
        undefined: "",
        label: ""
    }

    const CATEGORIES = []
    for(let product of products) {
        if(CATEGORIES.includes(product.categories[0])) {
            continue
        }
        else {
            CATEGORIES.push(product.categories[0])
        }
        
    }
    
    const [formData, setFormData] = useState(INIT_STATE);
    const [priceError, setPriceError] = useState({text: null})
    const [nameError, setNameError] = useState({text: null})
    const navigate = useNavigate();
    const {currentUser} = useContext(Context)
    const {userId} = useParams()

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        let length = products.length;
        let labels = formData.label.split(" ")
        let price = +formData.price

        if(isNaN(price)) {
            setPriceError({text: "Invalid Number"})
        }
        else if(formData.productName === "") {
            setNameError({text: "Enter Product Name"})
        }
        else {
            setPriceError({text: null})
            setNameError({text: null})
            let newProduct = {
                id: length + 1,
                name: formData.productName,
                description: formData.description || null,
                price: price,
                seller: {
                    id: currentUser.id,
                    name: currentUser.username
                },
                images: [],
                category: formData.undefined,
                labels: labels,
                region: currentUser.region || null
            }
            alert('Added a new Product')
            console.log(newProduct)
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
                error={nameError.text}
                helperText={nameError.text}
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
                error={priceError.text}
                helperText={priceError.text}
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
                id="category"
                margin="normal"
            >
                {CATEGORIES.map(category => (
                    <MenuItem key={category} value={category}>
                        {category}
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