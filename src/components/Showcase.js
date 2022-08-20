import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import josh from "../assets/images/josh.webp";
import { Link } from "react-router-dom";
import { navigateToTop } from "../utils/utils";

const Showcase = () => {
    return (
        <Box sx={{ padding: "8rem 0" }}>
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={5}>
                        <img src={josh} alt="Josh Stehle" />
                        <Typography
                            variant="subtitle2"
                            sx={{ textAlign: "end" }}
                        >
                            Josh Stehle
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={2}></Grid>
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                height: "100%",
                            }}
                        >
                            <Typography variant="h3">
                                A New Perspective
                            </Typography>
                            <br />
                            <Typography sx={{ maxWidth: "45ch" }}>
                                Josh's social media campaign to further autism
                                awareness has gathered over twenty million
                                views. His first book,{" "}
                                <em>I am a Superhero Expert,</em> describes his
                                and his brother Zach's extroardinary journey.
                            </Typography>
                            <br />
                            <Link to="/about" onClick={navigateToTop}>
                                <Button
                                    size="large"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Learn More!
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Showcase;
