import { createTheme } from "@mui/material";
import TitilliumWeb from "../assets/fonts/TitilliumWeb-SemiBold.ttf";
import CormorantGaramond from "../assets/fonts/CormorantGaramond-SemiBold.ttf";

let primary = createTheme({
    palette: {
        background: {
            default: "#ffffff",
            decorative: "#000000",
        },
        text: {
            primary: "#19180A",
            secondary: "#3d3a19",
        },
        primary: {
            main: "#ffb71d",
        },
        secondary: {
            main: "#285aff",
        },
        custom: {
            light: "#fffcea",
            decorative: "#164dff",
            lightMuted: "#e5e0bb",
            dark: "#101010",
            darkMuted: "#242424",
        },
    },
    typography: {
        primary: {
            accent: "TitilliumWeb",
            // decorative: "CormorantGaramond",
            main: "CormorantGaramond",
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `

        @font-face {
          font-family: 'TitilliumWeb';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('TitilliumWeb'), local('TitilliumWeb-regular'), url(${TitilliumWeb}) format('truetype');
        }
        @font-face {
          font-family: 'CormorantGaramond';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('CormorantGaramond'), local('CormorantGaramond'), url(${CormorantGaramond}) format('truetype');
        }
      `,
        },
    },
});

primary = createTheme(primary, {
    border: "1px solid red",
    custom: {
        spacing: {
            paragraph: "2rem",
            quote: "3rem",
        },
    },
    typography: {
        h1: {
            fontFamily: "TitilliumWeb",
            color: primary.palette.custom.dark,
            lineHeight: ".85em",
            fontSize: "clamp(3.5rem, 6vw, 7rem)",
        },
        h2: {
            fontFamily: primary.typography.primary.accent,
            color: primary.palette.custom.dark,
            fontSize: "clamp(3rem, 4vw, 10rem)",
        },
        h3: {
            fontFamily: primary.typography.primary.accent,
            color: primary.palette.custom.dark,
        },
        h5: {
            color: primary.palette.text.secondary,
            fontWeight: "bold",
        },
        h6: {
            color: primary.palette.text.secondary,
            fontWeight: "bold",
        },
        subtitle1: {
            color: primary.palette.custom.darkMuted,
            fontSize: "1.25rem",
            fontFamily: primary.typography.primary.main,
        },
        subtitle2: {
            color: primary.palette.custom.darkMuted,
            fontFamily: primary.typography.primary.main,
        },
        body1: {
            fontSize: "1.25rem",
            lineHeight: "1.25em",
            color: primary.palette.custom.darkMuted,
            fontFamily: primary.typography.primary.main,
        },
        body2: {
            fontSize: "1.5rem",
            lineHeight: "1.75em",
            color: primary.palette.custom.decorative,
            fontFamily: primary.typography.primary.main,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: primary.palette.custom.dark,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    // fontFamily: primary.typography.primary.accent,
                    fontSize: "1rem",
                },
            },
        },
    },
});

export { primary };
