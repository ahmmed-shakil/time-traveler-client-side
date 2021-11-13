import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const SingleWatch = ({ watch }) => {
    const { img, title, price, _id, description } = watch;
    const history = useHistory();
    const goToPurchase = (id) => {
        history.push(`/purchase/${id}`);
    }
    return (
        <Grid item sm={12} md={4}>
            <Card elevation={3} sx={{ fontFamily: "Mohave", mx: 'auto' }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={img}
                    alt="watch"
                />
                <CardContent sx={{ textAlign: 'left' }}>
                    <Typography gutterBottom variant="h5" sx={{ fontWeight: '600' }} component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.slice(0, 150)}...
                    </Typography>
                    <Typography variant="h6" sx={{ pt: 3, fontWeight: '600' }}>
                        Price: ${price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => goToPurchase(_id)} sx={{ background: '#cfb54c', border: '2px solid #cfb54c', borderRadius: '0', marginTop: '10px', transition: 'all ease-in-out 0.2s', color: 'white', mb: '3', width: '100%', '&:hover': { background: 'transparent', color: 'black', border: '2px solid black' } }}>BUY NOW</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default SingleWatch;