import { Box, Container } from "@mui/material";
import ContactSection from "../components/ContactSection";
import { primary } from "../themes/primary";

const Contact = () => {
    return (
        <Box
            sx={{
                backgroundColor: primary.palette.primary.main,
                padding: "8rem 0",
            }}
        >
            <Container>
                <ContactSection />
            </Container>
        </Box>
    );
};

export default Contact;
