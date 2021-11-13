import { Box, Typography, TextField, Button, CircularProgress, Alert, Container } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, authError } = useAuth();
    const [notMatched, setNotMatched] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            setNotMatched(true);
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Box className='login-bg'>
            <Container>
                <Grid container sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                    <Grid item sx={{ backgroundColor: 'white', py: 5 }} xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>Register</Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="ReType Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <Button sx={{ width: '75%', m: 1, backgroundColor: 'transparent', color: 'black', fontWeight: 'bold', border: '2px solid gray', transition: 'all ease-out 1s', '&:hover': { backgroundColor: '#cfb54c', color: 'black' } }} type="submit" className='btn-register'>Register</Button>
                            {notMatched && <Alert severity="error">Password did not match. Try again!</Alert>}
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text" sx={{ color: 'black' }}>Already Registered?<span style={{ textDecoration: 'underline', color: 'red', marginLeft: '2px' }}>Please Login</span></Button>
                            </NavLink>
                        </form>
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default Register;