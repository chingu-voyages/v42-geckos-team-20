import React from 'react';
import {Link} from 'react-router-dom'
import { Avatar, Box, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import users from '../data/users.json';
import { useParams } from 'react-router';
import ProductCard from '../components/ProductCard';


const UserDetails = () => {

    const { userId }= useParams();
    let user;

    // Gets User based om userId
    for(let u of users) {
        if(userId === String(u.id)) {
            user = u
        }
    }

    // Gets the amount to items the user is selling
    const sellingItemsAmount = user.ItemsToSell.length;
    

 // Component Styles 

    const avaterBoxStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        left: "2rem",
        width: 300,
        height: 400,
        gap: "2rem"
    }

    const avaterStyles = {
        width: "120px",
        height: "120px",
        backgroundColor: "#1976d2"
    }

    const usernameStyles = {
        position: "relative",
        bottom: "2rem",
        fontWeight: "400"
    }

    const itemsBoxStyles = {
        borderLength: "2rem",
        display: "flex",
        flexWrap: "wrap"
    }

    const sellingItemsH2 = {
        position: "absolute",
        top: "21rem",
        left: "2rem",
        borderBottom: "1px solid black",
        height: "2.5rem",
        width: "16rem"
    }


    const sellingItemsAmountStyles = {
        position: "absolute",
        left: "9.8rem",
        fontSize: "14px"
    }

    const linkStyles = {
        textDecoration: "none",
        position: "absolute",
        left: "16rem",
        top: "22.5rem",
    }

    const buttonStyles = {
        fontSize: "11px",
        padding: "5px",
        backgroundColor: "primary.dark",
        '&:hover': {
            backgroundColor: "primary.main"
        }

    }
 // -------------------------------------------------------------------

    // Gets avatar img based on image field in user
    const imgSource = user.image ? 
        <Avatar
            sx={avaterStyles}
            alt={`{u.username} image`}
            src={`user.image`}/>
        
        :
        <Avatar
            sx={avaterStyles}
            alt={`{u.username} image`}>
            <PersonIcon
                sx ={{fontSize: "60px"}}
            />
        </Avatar>
        

    // Sets if the user is selling items and displays them or not
    const items = user.ItemsToSell.length !== 0 ? 
        <>
            <h2 style={sellingItemsH2}>Your Products</h2> 
            <Link to="#" style={linkStyles}><Button variant="contained" sx={buttonStyles}>Add Product</Button></Link>
            {user.ItemsToSell.map((product)=>
                <ProductCard
                    key={product.id}
                    name={product.name}
                    seller={product.seller.name}
                    image={product.images[0]}
                id={product.id}
                />
            )}
        </>
        :
        <>
            <h2 style={sellingItemsH2}>No Products To Sell</h2>
            <Link to="#" style={linkStyles}><Button variant="contained" sx={buttonStyles}>Add Product</Button></Link>
        </>
        

    return (
        <>
        <Box sx={avaterBoxStyles}>
           {imgSource}
           <h2 style={usernameStyles}>{user.username}</h2>
           <span style={sellingItemsAmountStyles}>{`Number of Products: ${sellingItemsAmount}`}</span>
        </Box>
        <Box sx={itemsBoxStyles}>
            {items}
        </Box>
        </>
    )
}

export default UserDetails;