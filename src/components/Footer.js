import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StoreMallDirectoryTwoToneIcon from "@mui/icons-material/StoreMallDirectoryTwoTone";

const Footer = () => {

  return (
    <>
      <Paper
        sx={{
          display: "flex", 
          mt: "7%", 
          justifyContent: "center",
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
              width: "18.5em",
              height: "3em",
              display: "flex",
              justifyContent: "center",
              // alignItems: "flex-start",
              alignItems: "center"
            }}
          >
            <StoreMallDirectoryTwoToneIcon
              fontSize='large'
              sx={{ mr: "0.2em", color: "text.secondary" }}
            />
            <Typography variant="h6" color="text.secondary">
              Nearby Markets
            </Typography>
          </Box>
          <Box
            sx={{
              width: "32em",
              height: "4em",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Link href="#" underline="hover" variant="overline">About</Link>
            <Link href="#" underline="hover" variant="overline">Contact</Link>
            <Link href="#" underline="hover" variant="overline">FAQ</Link>
            <Link href="#" underline="hover" variant="overline">Blog</Link>
          </Box>
          <Box
            sx={{
              width: "17em",
              height: "4em",
              display: "flex",
              justifyContent: "space-between",
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
          <Box
            sx={{
              height: "4em",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant='caption' 
              display='block' 
              // color='#34a1eb' 
              color="divider"
              fontSize='0.8em'
            >
              © 2023 Nearby Markets. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default Footer;
