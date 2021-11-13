import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";
import './Navigation.css'
import useAuth from "../../../../hooks/useAuth";



const Navigation = () => {

    const { user, logout } = useAuth();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
                <CssBaseline />
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h5" className='text-color' >
                        <i className="fas fa-hourglass"></i> TIME-TRAVELER
                    </Typography>
                    {isMobile ? (
                        <NavigationDrawer style={{ width: '80vw' }} />
                    ) : (
                        <div >
                            <NavLink className='nav-item' to="/home">Home</NavLink>
                            <NavLink className='nav-item' to="/explore">Explore-Watches</NavLink>
                            <NavLink className='nav-item' to="/about">About</NavLink>
                            {user?.email && <NavLink className='nav-item' to="/dashboard">Dashboard</NavLink>}
                            {
                                user?.email ?
                                    <Typography sx={{ color: 'black', display: 'inline-block', ml: '15px' }} style={{ cursor: 'pointer' }} onClick={logout}><i style={{ marginTop: '10px' }} className="fas fa-sign-out-alt" ></i></Typography>
                                    :
                                    <NavLink className='nav-item' to="/login">Login</NavLink>
                            }
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>


    );
};

export default Navigation;