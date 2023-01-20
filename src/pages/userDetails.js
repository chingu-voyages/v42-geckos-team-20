import React from 'react';
import { Avatar, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import users from '../data/users';


const UserDetails = ({userId}) => {

    let user;
    for(let u of users) {
        if(userId === u.id) {
            user = u
        }
    }

    const imgSource = user.image ? 
        <Avatar
            alt={`{u.username} image`}
            src={`user.image`}
        /> 
        :
        <Avatar>
            alt={`{u.username} image`}
            <PersonIcon />
        </Avatar>

    return (
        <Box>
           {imgSource}
        </Box>
    )
}

export default UserDetails;