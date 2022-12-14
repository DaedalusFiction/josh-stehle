import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import bookCoverVertical from "../assets/images/bookCoverVertical.webp";

const Showcase = () => {
    return (
        <Box sx={{ padding: "8rem 0" }}>
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={5}>
                        <img
                            height="1200"
                            width="800"
                            src={bookCoverVertical}
                            alt="book cover of man ripping off clothes to reveal superhero outfit"
                        />
                        <Typography
                            variant="subtitle2"
                            sx={{ textAlign: "end" }}
                        >
                            Book Cover
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
                                and his brother Zach's extraordinary journey.
                            </Typography>
                            <br />
                            <Button
                                color="secondary"
                                size="large"
                                variant="contained"
                                href="https://books2read.com/SuperheroExpert"
                                sx={{ width: "fit-content" }}
                            >
                                Preorder Today!
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Showcase;
