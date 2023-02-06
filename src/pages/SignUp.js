import React, { useState } from "react";
import { TextField, Box, Button, InputAdornment, IconButton } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const SignUp = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [showReTypePassword, setShowRetypePassword] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRetypePasswordChange = (event) => {
    setRetypePassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleShowRetypePassword = () => {
    setShowRetypePassword(!showReTypePassword)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== retypePassword) {
        alert("Passwords do not match!");
        return;
    }
    console.log({ username, password });
    // Make API call to submit form data
  };

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
                id="username"
                label="Username"
                value={username}
                onChange={handleUsernameChange}
                margin='normal'
            />
            <TextField
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
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
                margin='normal'
            />

            <TextField
                id="retypePassword"
                label="RetypePassword"
                type="password"
                value={retypePassword}
                onChange={handleRetypePasswordChange}
                InputProps={{
                endAdornment: 
                    <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowRetypePassword}
                        edge="end"
                    >
                        {showReTypePassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>
                }}
                margin='normal'
            />
            <Button 
                variant="contained"
                onClick={handleSubmit} 
                size="large"
                sx={{
                mt: "16px",
                pt: "15px",
                pb: "15px"
                }}>
                Sign Up
            </Button>

        </Box>

    </Box>
  );
}

export default SignUp