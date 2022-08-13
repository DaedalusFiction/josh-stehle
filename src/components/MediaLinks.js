import { Box, Icon, IconButton, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { IconContext } from "react-icons";
import { SiTiktok } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import React from "react";
import { primary } from "../themes/primary";

const links = [
    {
        name: "facebook",
        href: "https://facebook.com/thestehle.bros",
        icon: <SiFacebook />,
    },

    {
        name: "tiktok",
        href: "https://tiktok.com@thestehle.bros",
        icon: <SiTiktok />,
    },
    {
        name: "instagram",
        href: "https://instagram.com/joshstehle",
        icon: <SiInstagram />,
    },
];

const MediaLinks = () => {
    return (
        <Box
            sx={{
                backgroundColor: "black",
                padding: "2rem 0 8rem 0",
                transform: "translateY(-2px)",
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    variant="h2"
                    sx={{ textAlign: "center", color: "white" }}
                >
                    Follow us on Social Media!
                </Typography>
                <Box
                    sx={{
                        padding: "1em",
                        border: "2px solid black",
                        // borderColor: primary.palette.primary.main,
                        borderRadius: "10px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <IconContext.Provider
                            value={{
                                color: primary.palette.secondary.main,
                                className: "global-class-name",
                                size: "3.25em",
                            }}
                        >
                            {links.map((link) => {
                                return (
                                    <Box
                                        key={link.name}
                                        sx={{
                                            borderRadius: "100%",
                                            "&:hover": {
                                                backgroundColor:
                                                    primary.palette.primary
                                                        .main,
                                                boxShadow:
                                                    "0px 0px 15px 15px " +
                                                    primary.palette.primary
                                                        .main,
                                            },
                                        }}
                                    >
                                        <IconButton href={link.href}>
                                            {link.icon}
                                        </IconButton>
                                    </Box>
                                );
                            })}
                        </IconContext.Provider>
                    </Box>
                    <br />
                    <Typography sx={{ color: "white", textAlign: "center" }}>
                        Now with more than 20 million views!
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default MediaLinks;
