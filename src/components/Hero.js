import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import heroImage from "../assets/images/heroImage2.png";
import bookCover from "../assets/images/bookCover.PNG";

const Hero = () => {
    return (
        <Box
            sx={{
                background: "#ffb71d",
                padding: "8rem 0 0 0",
                overflow: "hidden",
            }}
        >
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h1">
                            Josh Stehle: Author, Advocate, and Leader
                        </Typography>
                        <br />
                        <Typography>Some information on autism here</Typography>
                        <br />
                        <Button
                            color="secondary"
                            size="large"
                            variant="contained"
                        >
                            Preorder now!
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img src={bookCover} alt="Book Cover" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ marginTop: "8rem" }}>
                <img
                    src={heroImage}
                    alt="skyline"
                    style={{ transform: "scale(1.001)" }}
                />
            </Box>
        </Box>
    );
};

export default Hero;
