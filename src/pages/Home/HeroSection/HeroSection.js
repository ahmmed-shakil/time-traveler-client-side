import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='hero-bg'>
            <Container>
                <Grid sx={{ display: 'flex', alignItems: 'center', height: '100vh' }} container spacing={{ xs: 2, md: 3 }} columns={{ sm: 12, md: 7 }}>
                    <Grid sx={{ textAlign: 'left' }} item md={6} sm={12} className='text-start'>
                        <Typography variant="h5" component="h5" style={{ color: 'white' }}>
                            NEW ARRIVALS
                        </Typography>;
                        <Typography variant="h1" component="h2" style={{ fontSize: '80px', color: '#A99577', fontFamily: 'Mohave' }}>
                            Our Best <br />
                            Collections
                        </Typography>;
                        <Button sx={{ background: 'transparent', border: '2px solid #A99577', borderRadius: '0', py: '10px', px: '25px', marginTop: '10px', transition: 'all ease-in-out 0.5s', color: '#A99577', '&:hover': { background: '#A99577', color: 'white' } }}>EXPLORE<i className="fas fa-chevron-right" style={{ fontSize: '12px', marginLeft: '10px' }}></i></Button>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default HeroSection;