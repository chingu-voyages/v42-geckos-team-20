import { useContext, useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Context } from '../App';
import { supabase } from "../supabaseClient";

import { TextField, InputAdornment, IconButton, Box, Button, Typography, Link } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

const Signup = () => {
  const { setSession } = useContext(Context);

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleFormChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value })
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password
    })
    setSession(data.session)
    if(error) console.log(error)
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