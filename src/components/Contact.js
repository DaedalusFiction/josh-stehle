import { Box, Container } from "@mui/material";
import React from "react";
import ContactSection from "../components/ContactSection";
import { primary } from "../themes/primary";
const Contact = () => {
    return (
        <Box sx={{ background: primary.palette.primary.main }}>
            <Container>
                <ContactSection />
            </Container>
        </Box>
    );
};

export default Contact;
