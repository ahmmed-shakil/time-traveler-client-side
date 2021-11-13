import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import './HeroSection.css';

const HeroSection = () => {
    const history = useHistory();
    const explore = () => {
        history.push('/explore');
    }
    return (
        <div className='hero-bg'>
            <Container>
                <Grid sx={{ display: 'flex', alignItems: 'center', height: '100vh' }} container>
                    <Grid sx={{ textAlign: 'left' }} item md={7} sm={12} className='text-start'>
                        <Typography variant="h6" component="h5" style={{ color: 'white', fontFamily: 'Poppins' }}>
                            NEW ARRIVALS
                        </Typography>;
                        <Typography variant="h1" component="h2" style={{ fontSize: '45px', paddingBottom: '20px', color: '#cfb54c', fontFamily: 'Poppins' }}>
                            Our Best Collections
                        </Typography>;
                        <Button onClick={explore} sx={{ background: 'transparent', border: '2px solid #cfb54c', borderRadius: '0', marginTop: '10px', transition: 'all ease-in-out 0.5s', color: '#cfb54c', '&:hover': { background: '#cfb54c', color: 'white' } }}>EXPLORE<i className="fas fa-chevron-right" style={{ fontSize: '12px', marginLeft: '10px' }}></i></Button>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default HeroSection;