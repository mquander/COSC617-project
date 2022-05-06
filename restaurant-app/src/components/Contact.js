import React from "react";
import CustomAppBar from "./CustomAppBar";
import { Box, Container, Typography } from "@mui/material";

function Contact() {
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
          Contact Us
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Contact information for The Restauraunt can be found below
        </Typography>
      </Container>
      <Container>
          <Typography
            component="div"
            variant="h5"
            align="left"
            color="text.primary"
          >
            Email: therestaurant@site.com
          </Typography>
          <Typography
            component="div"
            variant="h5"
            align="left"
            color="text.primary"
          >
            Phone: 555-555-5555
          </Typography>
          <Typography
            component="div"
            variant="h5"
            align="left"
            color="text.primary"
          >
            Address: 1234 Main Street, Town, State
          </Typography>
      </Container>
    </>
  );
};

export default Contact;
