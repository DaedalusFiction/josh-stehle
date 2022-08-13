import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import brothersImage from "../assets/images/brothersImage.png";
import { navigateToTop } from "../utils/utils";

const About = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={{ margin: "8rem 0" }}>
                <Typography variant="h1">About Josh Stehle</Typography>

                <Box sx={{ padding: "4rem 0" }}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <img src={brothersImage} alt="" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Totam quidem molestias
                                    velit explicabo nostrum quaerat autem,
                                    repellendus reprehenderit? Eius illo optio
                                    nisi unde consequatur aperiam tenetur
                                    doloremque illum reprehenderit dignissimos,
                                    blanditiis officia eos tempora nihil
                                    laboriosam dolorem recusandae mollitia
                                    distinctio!
                                </Typography>
                                <br />
                                <Typography>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Totam quidem molestias
                                    velit explicabo nostrum quaerat autem,
                                    repellendus reprehenderit? Eius illo optio
                                    nisi unde consequatur aperiam tenetur
                                    doloremque illum reprehenderit dignissimos,
                                    blanditiis officia eos tempora nihil
                                    laboriosam dolorem recusandae mollitia
                                    distinctio!
                                </Typography>
                                <br />
                                <Typography>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Totam quidem molestias
                                    velit explicabo nostrum quaerat autem,
                                    repellendus reprehenderit? Eius illo optio
                                    nisi unde consequatur aperiam tenetur
                                    doloremque illum reprehenderit dignissimos,
                                    blanditiis officia eos tempora nihil
                                    laboriosam dolorem recusandae mollitia
                                    distinctio!
                                </Typography>
                                <br />
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
