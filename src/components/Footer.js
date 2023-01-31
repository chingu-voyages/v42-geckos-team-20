import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typography from "@mui/material/Typography";
import StoreMallDirectoryTwoToneIcon from "@mui/icons-material/StoreMallDirectoryTwoTone";

const Footer = () => {
  
  return (
    <>
      <Box
        sx={{
          display: "flex", bgcolor: "#eee", marginTop: "7%", justifyContent: "center",
        }}
      >
        <CssBaseline />
        <Container
          sx={{
            display: "flex", flexDirection: "column", margin: "4% 0 1.5% 0", alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "18.5em",
              height: "3em",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <StoreMallDirectoryTwoToneIcon
              fontSize='large'
              style={{ color: "#386ea8", marginRight: "0.2em" }}
            />
            <Typography variant='caption' color='#262626' fontSize='1.3em'>
              <strong>Nearby Markets</strong>
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
            <Typography variant="overline">About</Typography>
            <Typography variant="overline">Contact</Typography>
            <Typography variant="overline">FAQ</Typography>
            <Typography variant="overline">Blog</Typography>
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
            <InstagramIcon fontSize='medium' />
            <FacebookIcon fontSize='medium' />
            <TwitterIcon fontSize='medium' />
            <LinkedInIcon fontSize='medium' />
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
              variant='caption' display='block' color='#34a1eb' fontSize='0.8em'>
              © 2023 Nearby Markets. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
