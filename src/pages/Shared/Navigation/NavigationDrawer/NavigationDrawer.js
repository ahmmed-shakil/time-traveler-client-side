import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = '80vw';

function NavigationDrawer() {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                sx={{ '.MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'white' } }}

            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <NavLink className='nav-item' to="/home">Home</NavLink>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <NavLink className='nav-item' to="/explore">Explore-Watches</NavLink>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <NavLink className='nav-item' to="/about">About</NavLink>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <NavLink className='nav-item' to="/dashboard">Dashboard</NavLink>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <NavLink className='nav-item' to="/login">Login</NavLink>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton sx={{ ms: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    );
}
export default NavigationDrawer;