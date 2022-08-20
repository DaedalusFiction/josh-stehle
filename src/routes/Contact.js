import { Box } from "@mui/material";
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
            <ContactSection />
        </Box>
    );
};

export default Contact;
