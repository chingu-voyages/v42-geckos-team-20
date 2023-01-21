import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Total = () => {
  
  const boxStyle = {
    display: 'flex',
    justifyContent: "space-between",
    marginBottom: "20px"
  }

  const ContainerStyles = {
    width: '100%', 
    padding: '5%', 
    borderTop: '1px solid black',
    marginTop: '50px'
  }
  
    return (

        <Container sx={ContainerStyles}>
            <Box sx={boxStyle}>
                <Typography>Subtotal:</Typography>
                <Typography>$00.00</Typography>
            </Box>
            <Box sx={boxStyle}>
                <Typography>Shipping:</Typography>
                <Typography>$00.00</Typography>
            </Box>
            <Box sx={boxStyle}>
                <Typography>Tax:</Typography>
                <Typography>$00.00</Typography>
            </Box>
            <Box sx={boxStyle}>
                <Typography variant='h4'>Total</Typography>
                <Typography sx={{fontWeight: "bold"}} variant="h4">$00.00</Typography>
            </Box>
        </Container>
    )
}

export default Total