import { Box, Typography, TextField, Button, CircularProgress, Alert, Container } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Box className='login-bg'>
            <Container>
                <Grid container sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                    <Grid item sx={{ backgroundColor: 'white', py: 5 }} xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>Login</Typography>
                        <form onSubmit={handleLoginSubmit} >
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard" />
                            <Button sx={{ width: '75%', m: 1, backgroundColor: '#A99577', color: 'black', fontWeight: 'bold', border: '2px solid gray', transition: 'all ease-in 1s', '&:hover': { backgroundColor: 'transparent', color: 'black' } }} type="submit">Login</Button>
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>
                        <Button sx={{
                            width: '75%', m: 1, background: 'transparent', color: 'black', fontWeight: 'bold', border: '2px solid grey'
                        }} onClick={handleGoogleSignIn}><img style={{ display: 'inline - block', marginRight: '5px', height: '20px' }}
                            src='https://i.ibb.co/gZ5CYRG/2993685-brand-brands-google-logo-logos-icon.png' alt='google-icon' /> Google Sign In</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text" sx={{ color: 'black' }}>New User?<span style={{ textDecoration: 'underline', color: 'red', marginLeft: '2px' }}>Please Register</span></Button>
                        </NavLink>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default Login;