import React from "react";
import CustomAppBar from "./CustomAppBar";
import { Container, Typography } from "@mui/material";


function Home() {
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
          The Restaurant
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Looking for food? Well we've got it. We here at The Restaurant aim to provide
          the highest quality food, coupled with the most effective online ordering 
          system around. Experience The Restaurant today 
        </Typography>
      </Container>
    </>
  );
};

export default Home;
