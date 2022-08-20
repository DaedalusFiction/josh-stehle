import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import brothersImage from "../assets/images/brothersImage.jpeg";
import { navigateToTop } from "../utils/utils";

const About = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={{ margin: "8rem 0" }}>
                <Typography variant="h1">About</Typography>

                <Box sx={{ padding: "4rem 0" }}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
                                <img src={brothersImage} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    gap: ".75em",
                                }}
                            >
                                <Typography>
                                    I am a superhero expert... yet I know almost
                                    nothing about conventional superheroes. At
                                    least, when compared to an actual expert.
                                </Typography>
                                <Typography>
                                    My brother and best friend, Zach, is a true
                                    expert. He knows everything there is to know
                                    about superheroes, from the worlds they live
                                    in, to the writers and studios that created
                                    them.
                                </Typography>
                                <Typography>
                                    Zach is also on the autistic spectrum.
                                </Typography>
                                <Typography>
                                    <em>I am a Superhero Expert</em> is a look
                                    at autism from a new perspective. It
                                    describes the unique experience of growing
                                    up with an autistic older brother, while
                                    providing a glimpse into the challenges that
                                    autistic people often face and highlighting
                                    the indescribable beauty that autism can
                                    bring to siblings through the shared
                                    experience of two brothers.
                                </Typography>
                                <Typography>
                                    Together, Zach and I have reached millions
                                    of people through our worldwide social media
                                    platform, The Stehle Bros. We have been
                                    featured on ABC News and The Art of Autism,
                                    and have partnered with many amazing autism
                                    foundations, including the Doug Flutie Jr.
                                    Foundation, Integrate For Good, and more!
                                </Typography>
                                <Typography>
                                    <em>I am a Superhero Expert</em> celebrates
                                    the unique perspective of an autistic
                                    individual. I have spent my life learning
                                    and growing alongside Zach. He has taught me
                                    more about life than any book, teacher, or
                                    life experience ever could.
                                </Typography>
                                <Typography>Zach is my superhero.</Typography>
                                <Typography>
                                    And I am a superhero expert.
                                </Typography>
                                <Link to="/contact" onClick={navigateToTop}>
                                    <Button
                                        tabIndex={-1}
                                        variant="contained"
                                        size="large"
                                        color="secondary"
                                    >
                                        Join our Mailing List!
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default About;
