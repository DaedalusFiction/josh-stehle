import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";

const socialMedia = [
    { media: "TikTok", url: "https://tiktok.com/@thestehle.bros" },
    { media: "Instagram", url: "https://instagram.com/joshstehle" },
    { media: "Facebook", url: "https://facebook.com/thestehle.bros" },
];

const contactInfo = [{ type: "email", value: "joshstehle13@gmail.com" }];

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "black", padding: "3rem 0" }}>
            <Container maxWidth="xl">
                <Grid container sx={{ padding: "1rem 0" }}>
                    <Grid item xs={6}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1em",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{ color: primary.palette.custom.light }}
                            >
                                Social Media
                            </Typography>
                            {socialMedia.map((item) => {
                                return (
                                    <Typography
                                        key={item.media}
                                        sx={{
                                            width: "fit-content",
                                            color: primary.palette.custom
                                                .lightMuted,
                                            cursor: "pointer",
                                            "&:hover": {
                                                textDecoration: "underline",
                                            },
                                        }}
                                    >
                                        <a href={item.url}>{item.media}</a>
                                    </Typography>
                                );
                            })}
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1em",
                                alignItems: "end",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{ color: primary.palette.custom.light }}
                            >
                                Contact Info
                            </Typography>
                            {contactInfo.map((item) => {
                                return (
                                    <Typography
                                        key={item.type}
                                        align="right"
                                        sx={{
                                            color: primary.palette.custom
                                                .lightMuted,
                                        }}
                                    >
                                        {item.value}
                                    </Typography>
                                );
                            })}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
