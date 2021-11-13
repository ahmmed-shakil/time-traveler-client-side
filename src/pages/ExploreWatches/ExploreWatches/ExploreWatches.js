import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation/Navigation';
import SingleWatch from '../SingleWatch/SingleWatch';

const ExploreWatches = () => {
    const [watches, setWatches] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/watches')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])

    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ pt: 5 }}>
                <Typography sx={{ pt: 8, color: '#cfb54c' }} variant="subtitle1" gutterBottom component="div">
                    OUR PRODUCTS
                </Typography>
                <Typography sx={{ mb: 5 }} variant="h3" gutterBottom component="div">
                    Our Bestsellers
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {
                        watches.map(watch => <SingleWatch
                            key={watch._id}
                            watch={watch}
                        ></SingleWatch>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default ExploreWatches;