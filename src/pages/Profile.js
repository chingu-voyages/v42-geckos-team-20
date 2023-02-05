import { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from '../App';
import { supabase } from '../supabaseClient';

import { TextField, Box, Button } from '@mui/material';

export default function Profile() {
  const { currentUser, session, setSession } = useContext(Context);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [username, setUsername] = useState(null);
  const [first_name, setFirstName] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if(!session) navigate("/")

    if(currentUser) {
      try {
        setLoading(true)

        setUsername(currentUser.username)
        setFirstName(currentUser.first_name)
        setAvatarUrl(currentUser.avatar_url)
        setLocation(currentUser.location)
      } finally {
        setLoading(false)
      }
    }
  }, [session, currentUser])

  const updateProfile = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { user } = session

      const updates = {
        id: user.id,
        username,
        first_name,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)

      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.message)
    } finally {
      alert("Profile Updated")
      setLoading(false)
    }
  }

  return (
    <div className="Page">
      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}
      >
        <Box 
          sx={{ 
            display: "flex", 
            flexDirection: "column", 
            width: "fit-content"
          }}
        >
          <TextField
            disabled
            label="Email"
            value={session.user.email}
            type="text"
            id="email"
            margin="normal"
          />
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            margin="normal"
          />
          <TextField
            label="First Name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="first_name"
            margin="normal"
          />
          <TextField
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            id="location"
            margin="normal"
          />

          <Button 
            disabled={loading}
            onClick={updateProfile} 
            variant="contained"
            size="large"
            sx={{
              mt: "16px",
              pt: "15px",
              pb: "15px"
            }}
          >
            {loading ? "Saving..." : "Update Profile"}
          </Button>
        </Box>
      </Box>
    </div>
  )
}