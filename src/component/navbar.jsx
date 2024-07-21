import React from "react";
import { AppBar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setDrawerOpen(false);
  };

  const getButtonStyle = (button) => {
    return {
      backgroundColor: activeButton === button ? 'lightblue' : 'white',
    };
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem
          component={Link}
          to="/about"
          onClick={() => handleButtonClick('about')}
          style={getButtonStyle('about')}
        >
          <ListItemText primary="About" />
        </ListItem>

        <ListItem
          component={Link}
          to="/resumeTemplates"
          onClick={() => handleButtonClick('resumeTemplates')}
          style={getButtonStyle('resumeTemplates')}
        >
          <ListItemText primary="Resume Templates" />
        </ListItem>

        <ListItem
          component={Link}
          to="/MyResume"
          onClick={() => handleButtonClick('MyResume')}
          style={getButtonStyle('MyResume')}
        >
          <ListItemText primary="My Resume" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "26px", color: "orange", textDecoration: "underline" }}>
            Almabetter
          </Typography>
          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <Box
                component={Link}
                to="/resumeTemplates"
                onClick={() => handleButtonClick('resumeTemplates')}
                sx={{ color: activeButton === 'resumeTemplates' ? 'lightblue' : 'white', textDecoration: 'none', marginRight: '15px', fontWeight: "bolder", fontFamily: "inherit", fontSize: "19px" }}
              >
                Resume Templates
              </Box>
              <Box
                component={Link}
                to="/MyResume"
                onClick={() => handleButtonClick('MyResume')}
                sx={{ color: activeButton === 'MyResume' ? 'lightblue' : 'white', textDecoration: 'none', fontWeight: "bolder", fontFamily: "inherit", fontSize: "19px" }}
              >
                My Resume
              </Box>
              <Box
                component={Link}
                to="/about"
                onClick={() => handleButtonClick('about')}
                sx={{ color: activeButton === 'about' ? 'lightblue' : 'white', textDecoration: 'none', marginRight: '15px', fontWeight: "bolder", fontFamily: "inherit", fontSize: "19px" }}
              >
                About
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
