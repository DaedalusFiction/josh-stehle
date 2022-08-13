import React, { useState } from "react";

import emailjs from "@emailjs/browser";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

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
                "service_tmo76bn",
                "template_pfang7n",
                templateParams,
                "aMDOy4kUud9rd0Yg9"
            )
            .then(function () {
                setEmailSent(true);
            });
    };

    return (
        <Box
            className="section"
            id="contact"
            sx={{ backgroundColor: primary.palette.primary.main }}
        >
            <Container>
                <Box className="flex-center" sx={{ gap: "4em" }}>
                    <Box>
                        <Typography
                            variant="h1"
                            component="h5"
                            className="text-center"
                        >
                            Assemble!
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
                            border: "2px solid black",
                        }}
                    >
                        <Typography className="text-center">
                            Join our mailing list to get all the latest issues
                            straight to your inbox!
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            className="flex-center"
                            sx={{ flexDirection: "column", gap: "1em" }}
                        >
                            {!emailSent && (
                                <TextField
                                    color="secondary"
                                    id="outlined-basic"
                                    label="Email Address"
                                    variant="outlined"
                                    sx={{
                                        width: "20rem",
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
                            {!emailSent && (
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
                            <Typography variant="p">
                                Thanks! I'll be in touch soon!
                            </Typography>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default EmailForm;
