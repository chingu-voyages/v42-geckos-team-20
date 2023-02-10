import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { Avatar, Box, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useParams } from 'react-router';
import ProductCard from '../components/ProductCard';
import { Context } from '../App';


const UserDetails = () => {
    
    const { userId }= useParams();
    const {currentUser, products, session} = useContext(Context) 
    const {user} = session
    
    const userProducts  = products.filter(product => {
        if(product.seller_id === user.id) {
            return product
        }
    })

    console.log(session)
 // Component Styles 

    const avatarBoxStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        left: "2rem",
        width: 300,
        height: 400,
        gap: "2rem"
    }

    const avatarStyles = {
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
        left: "13rem",
        fontSize: "14px",
        width: "300px"
    }


    const buttonStyles = {
        position: "absolute",
        left: "16rem",
        top: "22.5rem",
        fontSize: "11px",
        padding: "5px",
        backgroundColor: "primary.dark",
        '&:hover': {
            backgroundColor: "primary.main"
        }

    }
 // -------------------------------------------------------------------

    // Gets avatar img based on image field in user
    const imgSource = currentUser.avatar_url ? 
        <Avatar
            sx={avatarStyles}
            alt={`{u.username} image`}
            src={`user.image`}/>
        
        :
        <Avatar
            sx={avatarStyles}
            alt={`{u.username} image`}>
            <PersonIcon
                sx ={{fontSize: "60px"}}
            />
        </Avatar>

    // Checks if the user is the correct user and displays the button if logged in.
        const productBtn = currentUser === null || user.id !== userId? 
        null
        :
            <Link to={`/users/${user.id}/add-product`}>
                <Button variant="contained" sx={buttonStyles}>
                    Add Product
                </Button>
            </Link>

    // Sets if the user is selling items and displays them or not
    const items = userProducts.length !== 0 ? 
        <>
            <h2 style={sellingItemsH2}>Your Products</h2>
            {productBtn}
            {userProducts.map((product)=>
                <ProductCard
                    key={product.id}
                    product={product}
                    currency={"$"}
                id={product.id}
                />
            )}
        </>
        :
        <>
            <h2 style={sellingItemsH2}>No Products To Sell</h2>
            {productBtn}
        </>
        

    return (
        <>
        <Box sx={avatarBoxStyles}>
           {imgSource}
           <h2 style={usernameStyles}>{currentUser.username}</h2>
           <span style={sellingItemsAmountStyles}>{`Number of Products: ${userProducts.length}`}</span>
        </Box>
        <Box sx={itemsBoxStyles}>
            {items}
        </Box>
        </>
    )
}

export default UserDetails;