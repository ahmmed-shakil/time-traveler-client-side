import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SingleWatch from '../../ExploreWatches/SingleWatch/SingleWatch';
import Navigation from '../../Shared/Navigation/Navigation/Navigation';

const ExploreWatchesSection = () => {
    const [watches, setWatches] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-brook-72353.herokuapp.com/watches')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])

    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ pt: 5 }}>
                <Typography sx={{ pt: 8, color: '#cfb54c', fontFamily: 'Poppins' }} variant="subtitle1" gutterBottom component="div">
                    OUR PRODUCTS
                </Typography>
                <Typography sx={{ mb: 5, fontFamily: 'Poppins' }} variant="h4" gutterBottom component="div">
                    Our Bestsellers
                </Typography>
                <Grid container spacing={{ xs: 1, md: 3 }}>
                    {
                        watches.slice(0, 6).map(watch => <SingleWatch
                            key={watch._id}
                            watch={watch}
                        ></SingleWatch>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default ExploreWatchesSection;