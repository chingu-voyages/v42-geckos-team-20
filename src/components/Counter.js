import { useState } from 'react';
import { IconButton, Box, Typography } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const Counter = () => {
  const [count, setCount] = useState(0); // send to parent

  const handleRemove = () => {
    if(count > 0) {
      setCount(count-1)
    }
  };

  const handleAdd = () => {
    setCount(count+1)
  };

  return (
    <Box 
      sx={{
        bgcolor: "divider",
        borderRadius: "50px",
        display: "flex",
        alignItems: "center",
        padding: "0.2rem 0.5rem",
        width: "fit-content"
      }}
    >
      <IconButton
        onClick={handleRemove}
      >
        <Remove />
      </IconButton>

      <Typography 
        variant="subtitle1" 
        sx={{ margin: "0 0.5rem" }}
      >
        {count}
      </Typography>

      <IconButton
        onClick={handleAdd}
      >
        <Add />
      </IconButton>
    </Box>
  )
}

export default Counter;