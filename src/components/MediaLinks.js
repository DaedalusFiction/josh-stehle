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
        icon: <SiFacebook size={60} />,
    },

    {
        name: "tiktok",
        href: "https://tiktok.com@thestehle.bros",
        icon: <SiTiktok size={60} />,
    },
    {
        name: "instagram",
        href: "https://instagram.com/joshstehle",
        icon: <SiInstagram size={60} />,
    },
];

const MediaLinks = () => {
    return (
        <Box sx={{ backgroundColor: "black", padding: "0 0 4rem 0" }}>
            <Container maxWidth="sm">
                <Typography
                    variant="h2"
                    sx={{ textAlign: "center", color: "white" }}
                >
                    Follow us on Social Media!
                </Typography>
                <br />
                <Box
                    sx={{
                        padding: "1em",
                        // backgroundColor: primary.palette.primary.main,
                        borderRadius: "5px",
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
                            }}
                        >
                            {links.map((link) => {
                                return (
                                    <div key={link.name}>
                                        <IconButton href={link.href}>
                                            {link.icon}
                                        </IconButton>
                                    </div>
                                );
                            })}
                        </IconContext.Provider>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default MediaLinks;
