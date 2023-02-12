import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Box, TextField, MenuItem,Button, InputAdornment, Select, InputLabel} from '@mui/material'
import { Context } from '../App';
import { supabase } from '../supabaseClient';

const AddProduct = () => {
    const INIT_STATE = {
        productName: "",
        description: "",
        price: "",
        images: "",
        quantity: ""
    }

    const [formData, setFormData] = useState(INIT_STATE);
    const [category, setCategory] = useState("")
    const [subCategory, setSubCategory] = useState([])
    const [priceError, setPriceError] = useState({text: null})
    const [nameError, setNameError] = useState({text: null})
    const [quantityError, setQuantityError] = useState({text: null})
    const {session, categories, products, setProducts, currency} = useContext(Context)
    const navigate = useNavigate();
    const {user} = session
    const {userId} = useParams()

    if(user.id !== userId) {
        navigate(`/`)
    }

    const subCategories = products.map(product => {
        for(let cat of product.categories.subcategories) {
            return cat
        }
    })

    const sortedSubCategories = [...new Set(subCategories)]

    const handleTextChange = (evt) => {
        const {id, value} = evt.target;
        setFormData(formData => ({
            ...formData, 
            [id]: value
        }))
    }

    const handleCategoryChange = (evt) => {
        setCategory(evt.target.value)
    }

    const handleSubCategoryChange = (evt) => {
        setSubCategory(evt.target.value)
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        let price = +formData.price
        let quantity = +formData.quantity
        const subCatIds = []
        let splitLinks

        if(formData.images) {
            splitLinks = formData.images.split(" ")
        }
        else {
            splitLinks = []
        }
        

        if(isNaN(price) || isNaN(quantity)) {
            setPriceError({text: "Invalid Number"})
        }
        else if( formData.price === "") {
            setPriceError({text: 'Enter Product Price'})
        }
        else if(formData.productName === "") {
            setNameError({text: "Enter Product Name"})
        }
        else if(formData.quantity === "") {
            setQuantityError({text: "Enter Product Quantity"})
        }

        else {
            setPriceError({text: null})
            setNameError({text: null})
            let newProduct = {
                name: formData.productName,
                price: price,
                description: formData.description || null,
                links: splitLinks[0] || null,
                quantity: quantity || 0,
                seller_id: user.id,
            }
            // console.log(newProduct)

            //* ADDS INFORMATION TO DATABASE
            const {data: product, productError} = await supabase
                .from('products')
                .insert(newProduct)
                .select("*")

            const {data: categoryId, categoryError} = await supabase
                .from("categories")
                .select("id")
                .eq("name", category)
            

            for(let sub of subCategory) {
                console.log(sub)
                const {data: subcategory, subError} = await supabase
                    .from('subcategories')
                    .select('id')
                    .eq("name", sub)

                subCatIds.push(subcategory[0].id)                
            }

            for(let id of subCatIds) {
                const {productCatError} = await supabase
                .from("product_categories")
                .insert({product_id: product[0].id, category_id: categoryId[0].id, subcategory_id: id})
            }

            if(splitLinks !== null) {
                for(let img of splitLinks) {
                    const {imageError} = await supabase
                    .from("images")
                    .insert({url: img, product_id: product[0].id})
                }
            }

            setProducts([...products, {...product, categories: {category: [category], subcategories: subCategory}}])
            console.log(products)
            

            setFormData(INIT_STATE)
            navigate(`/users/${user.id}`)
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
                        {currency}
                    </InputAdornment>
                )}}
            />

            <TextField
                label="Product Images"
                value={formData.images}
                onChange={handleTextChange}
                type="text"
                id="images"
                margin="normal"
            />

            <InputLabel id='categorySelect'>Categories</InputLabel>
            <Select
                labelId='categorySelect'
                label="Product Category"
                value={category}
                onChange={handleCategoryChange}
                select
                id="category"
                margin="normal"
            >
                {categories.map(category => (
                    <MenuItem key={category} value={category}>
                        {category}
                    </MenuItem>
                ))}
            </Select>

            <InputLabel id="subCategorySelect">SubCategories</InputLabel>
            <Select
                labelId='subCategorySelect'
                id='subCategories'
                value={subCategory}
                label='SubCategories'
                onChange={handleSubCategoryChange}
                multiple
                margin="normal"
            >
                {sortedSubCategories.map(category => (
                    <MenuItem key={category} value={category}>
                        {category}
                    </MenuItem>
                ))}
            </Select>

            <TextField 
                label="Quantity"
                value={formData.quantity}
                onChange={handleTextChange}
                error={quantityError.text}
                helperText={quantityError.text}
                type="text"
                id="quantity"
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