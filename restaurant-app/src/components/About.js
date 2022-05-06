import React from "react";
import CustomAppBar from "./CustomAppBar";
import { Box, Container, Typography } from "@mui/material";

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
        }}
        alt="Picture of restaurant"
        src="https://media.architecturaldigest.com/photos/5e20aa88e37a670009c031f0/16:9/w_120,c_limit/19101_press_fotografiska_12-7-19_199.jpg 120w, https://media.architecturaldigest.com/photos/5e20aa88e37a670009c031f0/16:9/w_240,c_limit/19101_press_fotografiska_12-7-19_199.jpg 240w, https://media.architecturaldigest.com/photos/5e20aa88e37a670009c031f0/16:9/w_320,c_limit/19101_press_fotografiska_12-7-19_199.jpg 320w, https://media.architecturaldigest.com/photos/5e20aa88e37a670009c031f0/16:9/w_640,c_limit/19101_press_fotografiska_12-7-19_199.jpg 640w, https://media.architecturaldigest.com/photos/5e20aa88e37a670009c031f0/16:9/w_960,c_limit/19101_press_fotografiska_12-7-19_199.jpg"
        />
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          COSC 617 is really cool and this is our restaurant app. Enjoy!
        </Typography>
      </Container>
    </>
  );
};

export default About;
