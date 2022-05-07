import React from "react";
import CustomAppBar from "./CustomAppBar";
import { Box, Container, Typography } from "@mui/material";
import Image from "../restaurant_img.jpg";

function About() {
  return (
    <>
    <CustomAppBar />
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Our Story
        </Typography>
        <Box 
        component="img"
        sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            margin: 2,
            pl: 20
        }}
        alt="Picture of restaurant"
        src={Image}
        />
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          COSC 617 is really cool and this is our restaurant app. Enjoy!
        </Typography>
      </Container>
    </>
  );
};

export default About;
