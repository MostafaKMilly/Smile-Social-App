import {
    AccountBox,
    Article,
    Group,
    Home,
    ModeNight,
    Person,
    Settings,
    Storefront,
  } from "@mui/icons-material";
  import {
    Box,
    List,
    Button,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
  } from "@mui/material";
  import React from "react"  
  import Add from '../containers/Add'
  import BackG from '../../../image/background8.jpg'

  const Sidebar = ({mode,setMode}) => {
    const BoxStyle = {backgroundImage: `url(${BackG}) `}
    // const ButtonStyle = { borderRadius: '16px' , border : '2px solid' , bordercolor : 'black' }
    return (
     
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block"  } }} style = {BoxStyle}>
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="../containers/Add">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Inquiries" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="Pages" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <Button component="a" href="#simple-list" style = {ButtonStyle}>
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </Button>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary="Marketplace" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <ModeNight />
                </ListItemIcon>
                <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    
    );
  };
  
  export default Sidebar;