import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from "../../../../hooks/useAuth";

const drawerWidth = '80vw';

function NavigationDrawer() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const { user, logout } = useAuth();
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                sx={{ '.MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'black' } }}

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
                            <NavLink className='nav-item' to="/dashboard">Dashboard</NavLink>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        {
                            user?.email ?
                                <Typography sx={{ color: 'white', display: 'inline-block', ml: '15px' }} style={{ cursor: 'pointer' }} onClick={logout}><i style={{ marginTop: '10px' }} className="fas fa-sign-out-alt" ></i></Typography>
                                :
                                <NavLink className='nav-item' to="/login">Login</NavLink>
                        }
                    </ListItem>
                </List>
            </Drawer>
            <IconButton sx={{ ms: 'auto', color: 'white' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    );
}
export default NavigationDrawer;