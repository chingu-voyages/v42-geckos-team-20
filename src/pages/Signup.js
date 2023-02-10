import { useContext, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Context } from '../App';
import { supabase } from "../supabaseClient";

import { TextField, InputAdornment, IconButton, Box, Button, Typography, Link } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

const Signup = () => {
  const { setSession } = useContext(Context);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "", first_name: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleFormChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value })
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSignup = async () => {
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            first_name: form.first_name
          }
        }
      })
      setSession(data.session)
      if (error) throw error
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      navigate("/")
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
          width: "100%",
          mt: 4,
          mb: 4
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
            label="Email"
            value={form.email}
            onChange={handleFormChange}
            type="text"
            id="email"
            margin="normal"
          />

          <TextField
            label="Password"
            value={form.password}
            onChange={handleFormChange}
            type={showPassword ? 'text' : 'password'}
            id="password"
            InputProps={{
              endAdornment: 
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
            }}
            margin="normal"
          />

          <TextField
            label="First Name"
            value={form.first_name}
            onChange={handleFormChange}
            type="text"
            id="first_name"
            margin="normal"
          />

          <Button 
            variant="contained"
            onClick={handleSignup} 
            size="large"
            sx={{
              mt: "16px",
              pt: "15px",
              pb: "15px"
            }}
          >
            Signup
          </Button>

          <Typography textAlign="center" sx={{ mt: 2 }}>
            Already have an account? <Link component={RouterLink} to="/login">Log In</Link>
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Signup;