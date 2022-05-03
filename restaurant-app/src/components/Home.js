import React from "react";
import CustomAppBar from "./CustomAppBar";
import { Container, Typography, Grid, Card, CardHeader, CardContent, Box, CardActions, Button } from "@mui/material";

const options = [
  {
    title: 'Menu',
    description: [
      'Click here to order some delicious food',
    ],
    buttonText: 'Order Now',
    buttonVariant: 'outlined',
  },
  {
    title: 'About Us',
    description: [
      'Click here to learn more about The Restaurant and our story',
    ],
    buttonText: 'About',
    buttonVariant: 'outlined',
  },
  {
    title: 'Contact Us',
    description: [
      'Click here to view contact info and details for The Restaurant',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

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
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {options.map((option) => (
            <Grid
              item
              key={option.title}
              xs={12}
              sm={12}
              md={4}
            >
              <Card>
                <CardHeader
                  title={option.title}
                  titleTypographyProps={{ align: 'center' }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                  </Box>
                  <p>
                      <Typography
                        component="p"
                        variant="body1"
                        align="center"
                        key={option.description}
                      >
                        {option.description}
                      </Typography>
                  </p>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={option.buttonVariant}>
                    {option.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
