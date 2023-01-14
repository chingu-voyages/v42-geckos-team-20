import { useState } from 'react';
import { TextField, InputAdornment, IconButton, Box, Button } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleFormChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value })
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = () => {
    alert("You are now Logged In")
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
          width: "fit-content"
        }}
      >
        <TextField
          label="Username"
          value={form.username}
          onChange={handleFormChange}
          type="text"
          id="username"
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
          onClick={handleSubmit} 
          size="large"
          sx={{
            mt: "16px",
            pt: "15px",
            pb: "15px"
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  )
}

export default Login;