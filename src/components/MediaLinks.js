import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { IconContext } from "react-icons";
import { SiTiktok } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { primary } from "../themes/primary";

const MediaLinks = () => {
    const links = [
        {
            name: "Facebook",
            href: "https://facebook.com/thestehle.bros",
        },

        {
            name: "TikTok",
            href: "https://tiktok.com/@thestehle.bros",
        },
        {
            name: "Instagram",
            href: "https://instagram.com/joshstehle",
        },
    ];
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
                    Follow on Social Media!
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
                            {links.map((link, index) => {
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
                                        <Tooltip title={link.name} followCursor>
                                            <IconButton href={link.href}>
                                                {index === 0 && <SiFacebook />}
                                                {index === 1 && <SiTiktok />}
                                                {index === 2 && <SiInstagram />}
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                );
                            })}
                        </IconContext.Provider>
                    </Box>
                    <br />
                    <Typography sx={{ color: "white", textAlign: "center" }}>
                        And join our newsletter below!
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default MediaLinks;
