import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import brothersImage from "../assets/images/brothersImage.png";
import { Link } from "react-router-dom";
import { navigateToTop } from "../utils/utils";

const Showcase = () => {
    return (
        <Box sx={{ padding: "8rem 0" }}>
            <Container maxWidth="xl">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                height: "100%",
                            }}
                        >
                            <Typography variant="h3">
                                Together they are Strong
                            </Typography>
                            <br />
                            <Typography sx={{ maxWidth: "45ch" }}>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Enim est ipsum iusto non
                                impedit architecto reiciendis tempora ipsam
                                obcaecati iure?
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
                    <Grid item xs={12} md={6}>
                        <img
                            src={brothersImage}
                            alt="Josh and his brother smiling"
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Showcase;
