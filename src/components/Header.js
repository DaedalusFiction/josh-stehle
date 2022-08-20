import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Slide, useScrollTrigger } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { primary } from "../themes/primary";
import { useState } from "react";
import { navigateToTop } from "../utils/utils";

const pages = ["about", "contact"];
const activeStyle = {
    color: primary.palette.custom.light,
};
const inactiveStyle = {
    color: primary.palette.custom.lightMuted,
};

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
    };

    return (
        <Slide
            direction="down"
            in={trigger}
            sx={{ position: "fixed", top: "0", zIndex: "10" }}
        >
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Link
                            to="/"
                            onClick={() => {
                                navigateToTop();
                            }}
                        >
                            <Box
                                sx={{
                                    display: { xs: "none", md: "flex" },
                                    mr: 1,
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    component="p"
                                    sx={{ fontSize: "2.5rem" }}
                                >
                                    JS
                                </Typography>
                            </Box>
                        </Link>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page, index) => (
                                    <Link
                                        key={index}
                                        to={`/${page}`}
                                        onClick={() => {
                                            navigateToTop();
                                        }}
                                    >
                                        <MenuItem
                                            key={page}
                                            onClick={handleCloseNavMenu}
                                        >
                                            <Typography textAlign="center">
                                                {page}
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                        <Link
                            to="/"
                            style={{ color: "inherit" }}
                            onClick={() => {
                                navigateToTop();
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="p"
                                noWrap
                                sx={{
                                    mr: 2,
                                    display: { xs: "flex", md: "none" },
                                    fontSize: "1.75rem",
                                    flexGrow: 1,
                                    fontWeight: 700,
                                    color: primary.palette.custom.dark,
                                }}
                            >
                                Josh Stehle
                            </Typography>
                        </Link>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {pages.map((page) => (
                                <NavLink
                                    to={`/${page}`}
                                    key={page}
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : inactiveStyle
                                    }
                                    onClick={() => {
                                        navigateToTop();
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        component="p"
                                        //separate styling because can't get NavLink working with hover
                                        sx={{
                                            textTransform: "uppercase",
                                            margin: "0 1em",
                                            "&:hover": {
                                                color: primary.palette.custom
                                                    .light,
                                            },
                                        }}
                                    >
                                        {page}
                                    </Typography>
                                </NavLink>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    );
};
export default Header;
