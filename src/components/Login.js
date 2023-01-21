import { useContext } from "react";
import { Context } from '../App';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment, IconButton, Box, Button } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import users from '../data/users.json';

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ username: null, password: null });
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(Context);

  const handleFormChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value })
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = () => {
    if(users.find((user) => user.username === form.username)) {
      if(users.find((user) => user.password === form.password)) {
        setErrors({username: null, password: null})

        const { password, ...rest } = users.find((user) => user.username === form.username)
        setCurrentUser(rest)
        
        alert("You are now Logged In")

        navigate("/")
      } else {
        setErrors({username: null, password: "Incorrect Password"})
      }
    } else {
      setErrors({...errors, username: "User does not Exist"})
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
          width: "fit-content"
        }}
      >
        <TextField
          label="Username"
          value={form.username}
          onChange={handleFormChange}
          error={errors.username}
          helperText={errors.username}
          type="text"
          id="username"
          margin="normal"
        />

        <TextField
          label="Password"
          value={form.password}
          onChange={handleFormChange}
          error={errors.password}
          helperText={errors.password}
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