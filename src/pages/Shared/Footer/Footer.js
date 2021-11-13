import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Box
                sx={{
                    px: { xs: 5, sm: 8 },
                    py: { xs: 5, sm: 8 },
                    backgroundColor: "grey",
                    color: "white",
                }}
                className="Titillium"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box>
                                Contact
                            </Box>
                            <Box>
                                Support
                            </Box>
                            <Box>
                                Privacy
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Account</Box>
                            <Box>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/login" >
                                    Login
                                </Link>
                            </Box>
                            <Box>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/register" >
                                    Register
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Messages</Box>
                            <Box>
                                Backup
                            </Box>
                            <Box>
                                History
                            </Box>
                            <Box>
                                Roll
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 8 }} pb={{ xs: 5, sm: 0 }}>
                        Copyright TIME-TRAVELER &copy; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer >
    );
};


export default Footer;