import { useContext, useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Context } from '../App';
import { supabase } from "../supabaseClient";

import { TextField, InputAdornment, IconButton, Box, Button, Typography, Link } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

const Login = () => {
  const { setCurrentUser, session, setSession } = useContext(Context);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFormChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value })
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password
      })
      console.log(data)
      setSession(data.session)
      if (error) throw error
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
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

          <Button 
            variant="contained"
            onClick={handleLogin} 
            size="large"
            sx={{
              mt: "16px",
              pt: "15px",
              pb: "15px"
            }}
          >
            Login
          </Button>

          <Typography textAlign="center" sx={{ mt: 2 }}>
            Don't have an account? <Link component={RouterLink} to="/signup">Sign Up</Link>
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default Login;