import React from 'react';
import { Avatar, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import users from '../data/users.json';
import products from "../data/products.json"
import { useParams } from 'react-router';
import ProductCard from '../components/ProductCard';
// import { fontFamily, fontWeight, height } from '@mui/system';


const UserDetails = () => {

    const { userId }= useParams();
    let user;
    const sellItems = []

    // Gets User based om userId
    for(let u of users) {
        if(userId === String(u.id)) {
            user = u
        }
    }



    // Avater Box Styles
    const avaterBoxStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        left: "2rem",
        width: 300,
        height: 400,
        // border: "1px solid black"
        gap: "2rem"
    }

    // Avatar styles
    const avaterStyles = {
        width: "120px",
        height: "120px",
        backgroundColor: "#1976d2"
    }

    // Username Styles
    const usernameStyles = {
        position: "relative",
        bottom: "2rem",
        fontWeight: "400"
    }


    const itemsBoxStyles = {
        // borderTop: "1px solid black",
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
        width: "15rem"
    }


    for(let i of products) {
        if(user.ItemsToSell.includes(i.id)) {
            sellItems.push(i)
        }
    }

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
        

    
    const items = sellItems.length !== 0 ? 
        <>
        <h2 style={sellingItemsH2}>Your Items</h2>
        {sellItems.map((product)=>
        <ProductCard
        key={product.id}
        name={product.name}
        seller={product.seller.name}
        image={product.images[0]}
        id={product.id}
        />)}
        </>
        :
        <h2 style={sellingItemsH2}>No Items To Sell</h2>
        
    

    


    return (
        <>
        <Box sx={avaterBoxStyles}>
           {imgSource}
           <h2 style={usernameStyles}>{user.username}</h2>
        </Box>
        <Box sx={itemsBoxStyles}>
            {items}
        </Box>
        </>
    )
}

export default UserDetails;