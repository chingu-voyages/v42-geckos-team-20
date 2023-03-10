import { useContext } from 'react';
import { Context } from '../App.js';

import ThemeSelect from "./ThemeSelect";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StoreMallDirectoryTwoToneIcon from "@mui/icons-material/StoreMallDirectoryTwoTone";

const Footer = () => {
  const { currency, setCurrency } = useContext(Context);

  return (
    <>
      <Paper
        sx={{
          display: "flex", 
          mt: "7%", 
          justifyContent: "center", 
          borderRadius: 0, 
          boxShadow: 3
        }}
      >
        <Container
          sx={{
            display: "flex", 
            flexDirection: "column", 
            margin: "4% 0 1.5% 0", 
            alignItems: "center",
          }}
        >
          <Box
              sx={{
                width: "80%",
                height: "fit-content",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                alignItems: "center",
                margin: 2
              }}
            >
            <Box
              sx={{
                width: "fit-content",
                height: "fit-content",
                display: "flex",
                alignItems: "center"
              }}
            >
              <StoreMallDirectoryTwoToneIcon
                fontSize='large'
                sx={{ mr: "0.2em", color: "text.secondary" }}
              />
              <Typography 
                variant="h6" 
                color="text.secondary"
                sx={{ mr: 2 }}
              >
                Nearby Markets
              </Typography>
            </Box>

            <ToggleButtonGroup
              value={currency}
              exclusive
              onChange={(event, newValue) => setCurrency(newValue)}
            >
              <ToggleButton value="???">???</ToggleButton>
              <ToggleButton value="$">$</ToggleButton>
            </ToggleButtonGroup>

            <ThemeSelect />
          </Box>

          <Box
            sx={{
              width: "90%",
              height: "4em",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "flex-end",
            }}
          >
            <Link href="#" underline="hover" variant="overline">
              About
            </Link>
            <Link href="#" underline="hover" variant="overline">
              Contact
            </Link>
            <Link href="#" underline="hover" variant="overline">
              FAQ
            </Link>
            <Link href="#" underline="hover" variant="overline">
              Blog
            </Link>
          </Box>
          <Box
            sx={{
              width: "50%",
              height: "4em",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "flex-end",
            }}
          >
            <IconButton>
              <InstagramIcon fontSize='medium' />
            </IconButton>
            <IconButton>
              <FacebookIcon fontSize='medium' />
            </IconButton>
            <IconButton>
              <TwitterIcon fontSize='medium' />
            </IconButton>
            <IconButton>
              <LinkedInIcon fontSize='medium' />
            </IconButton>
          </Box>
          
          <Typography
            variant='caption' 
            display='block' 
            color="text.secondary"
            fontSize='0.8em'
            sx={{ padding: "2em", textAlign: "center" }}
          >
            ?? 2023 Nearby Markets. All rights reserved.
          </Typography>
        </Container>
      </Paper>
    </>
  );
};

export default Footer;
