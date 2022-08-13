import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import heroImage from "../assets/images/heroImage2.png";

const Hero = () => {
    return (
        <Box
            sx={{
                // backgroundImage: `url(${earth})`,
                background: "#ffb71d",
                // background:
                //     "linear-gradient(0deg, rgba(232,166,26,1) 46%, rgba(255,210,115,1) 100%)",

                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
            }}
        >
            <Container>
                <Grid container sx={{ margin: "8rem 0" }}>
                    <Grid item xs={12} md={5}>
                        <Typography variant="h1">
                            Josh Stehle: Superhero Expert
                        </Typography>
                        <br />
                        <Typography>Some Tagline Here</Typography>
                        <br />
                        <Button
                            color="secondary"
                            size="large"
                            variant="contained"
                        >
                            Preorder now!
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            <Box>
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
