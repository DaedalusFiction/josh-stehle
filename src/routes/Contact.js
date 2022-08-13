import { Box, Typography } from "@mui/material";
import ContactSection from "../components/ContactSection";

const Contact = () => {
    return (
        <Box sx={{ padding: "8rem 0" }}>
            <Typography variant="h2" component="h4">
                Assemble!
            </Typography>
            <ContactSection />
        </Box>
    );
};

export default Contact;
