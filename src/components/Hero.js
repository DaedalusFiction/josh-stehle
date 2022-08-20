import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import heroImage from "../assets/images/heroImage2.webp";
import bookCoverVertical from "../assets/images/bookCoverVertical.webp";

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
                <Grid container spacing={6}>
                    <Grid item xs={12} md={8}>
                        <Box
                            className="flex-center"
                            sx={{
                                height: "100%",
                                width: "100%",
                                flexDirection: "column",
                                alignItems: { xs: "center", md: "start" },
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{ textAlign: { xs: "center", md: "left" } }}
                            >
                                Josh Stehle: Autism Author, Advocate, and Leader
                            </Typography>
                            <br />
                            <Typography>
                                Preorder <em>I am a Superhero Expert</em> today!
                            </Typography>
                            <br />
                            <Button
                                color="secondary"
                                size="large"
                                variant="contained"
                                href="https://books2read.com/SuperheroExpert"
                            >
                                Preorder
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            <img
                                height="900"
                                width="600"
                                src={bookCoverVertical}
                                alt="Book Cover"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ marginTop: "8rem" }}>
                <img
                    height="210"
                    width="1200"
                    src={heroImage}
                    alt="skyline"
                    style={{ transform: "scale(1.001)" }}
                />
            </Box>
        </Box>
    );
};

export default Hero;
