import React, { useState } from "react";

import emailjs from "@emailjs/browser";
import { Box, Button, TextField, Typography } from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { primary } from "../themes/primary";
import { validateEmail } from "../utils/utils";

const EmailForm = () => {
    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleEmailChange = (e) => {
        setEmailError(!validateEmail(e.target.value));
        setEmail(e.target.value);
    };

    const sendEmail = () => {
        var templateParams = {
            website: "portfolio",
            email: email,
        };

        emailjs
            .send(
                "service_taboqxa",
                "template_vjue97r",
                templateParams,
                "evZwfL6dFgWqReTEz"
            )
            .then(
                function () {
                    setEmailSent(true);
                },
                function () {
                    setEmailError(true);
                }
            );

        // emailjs
        //     .send(
        //         "service_tmo76bn",
        //         "template_ggro2co",
        //         templateParams,
        //         "aMDOy4kUud9rd0Yg9"
        //     )
        //     .then(function () {
        //         setEmailSent(true);
        //     });
    };

    return (
        <Box
            className="section"
            id="contact"
            // sx={{ backgroundColor: primary.palette.primary.main }}
        >
            <Box className="flex-center" sx={{ gap: "4em", flexWrap: "wrap" }}>
                <Box>
                    <Typography
                        variant="h1"
                        component="h5"
                        className="text-center"
                    >
                        Contact Josh today!
                    </Typography>
                    <br />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        maxWidth: "30rem",
                        backgroundColor: "white",
                        padding: "2rem",
                        borderRadius: "10px",
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                    }}
                >
                    <Typography className="text-center">
                        Join our newsletter to get all the latest issues
                        straight to your inbox!
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        className="flex-center"
                        sx={{ flexDirection: "column", gap: "1em" }}
                    >
                        {!emailSent && !emailError && (
                            <TextField
                                color="secondary"
                                id="outlined-basic"
                                label="Email Address"
                                variant="outlined"
                                sx={{
                                    input: {
                                        color: primary.palette.custom.dark,
                                    },
                                }}
                                value={email}
                                onChange={handleEmailChange}
                                focused
                                error={emailError}
                            />
                        )}
                        {!emailSent && !emailError && (
                            <Button
                                size="large"
                                variant="contained"
                                color="secondary"
                                onClick={sendEmail}
                                endIcon={<ArrowRightAltIcon />}
                                sx={{ width: "fit-content" }}
                            >
                                Send
                            </Button>
                        )}
                    </Box>
                    {emailSent && (
                        <Typography variant="p" sx={{ textAlign: "center" }}>
                            Thanks for signing up!
                        </Typography>
                    )}
                    {emailError && (
                        <Typography variant="p" sx={{ textAlign: "center" }}>
                            Something went wrong! Please contact
                            joshstehle13@gmail.com if you continue to get this
                            error.
                        </Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default EmailForm;
