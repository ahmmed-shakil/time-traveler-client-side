import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Button, Grid, Container, TextField, Paper, ButtonBase, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Navigation from '../Shared/Navigation/Navigation/Navigation';

const Purchase = () => {
    const [watch, setWatch] = React.useState({});
    const { id } = useParams();
    const history = useHistory();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:5000/watches/${id}`)
            .then(res => res.json())
            .then(data => setWatch(data))
    }, [id])

    const onSubmit = data => {
        data.status = 'pending';
        data.orderedItem = {
            id: watch._id,
            title: watch.title,
            price: watch.price,
            img: watch.img
        };
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setSuccess(true);
                    reset();
                    history.push('/home');
                }
            })
    };

    return (
        <Container>
            <Navigation></Navigation>
            <h3 style={{ background: '#cfb54c', marginTop: '50px' }}>CONFIRM YOUR ORDER NOW</h3>
            <Grid container spacing={4} columns={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontFamily: 'Poppins', textAlign: 'left' }} variant="h6" gutterBottom component="div">
                        Please fill up the form with shipping information
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>

                        <TextField sx={{ width: { lg: '100%', md: '90%', xs: '80%' }, my: 2 }} {...register("name")} defaultValue={user.displayName} type="text" id="standard-basic" label="Full Name" variant="standard" required />

                        <TextField sx={{ width: { lg: '100%', md: '90%', xs: '80%' }, my: 2 }}  {...register("email")} defaultValue={user.email} type="email" id="standard-basic" label="Enter Email" variant="standard" required />

                        <TextField sx={{ width: { lg: '100%', md: '90%', xs: '80%' }, my: 2 }} {...register("phone")} type="tel" id="standard-basic" label="Phone Number" variant="standard" required />

                        <TextField sx={{ width: { lg: '100%', md: '90%', xs: '80%' }, my: 2 }} {...register("address1")} type="text" id="standard-basic" label="Apartment or floor" variant="standard" required />

                        <TextField sx={{ width: { lg: '100%', md: '90%', xs: '80%' }, my: 2 }} {...register("address2")} type="text" id="standard-basic" label="Road No such as 1234 Main St" variant="standard" required />

                        <TextField sx={{ width: { lg: '100%', md: '90%', xs: '80%' }, my: 2 }} {...register("city")} type="text" id="standard-basic" label="City" variant="standard" required />

                        <Button sx={{ background: '#cfb54c', border: '2px solid #cfb54c', borderRadius: '0', marginTop: '10px', transition: 'all ease-in-out 0.2s', color: 'white', mb: '3', width: '100%', '&:hover': { background: 'transparent', color: 'black', border: '2px solid black' } }} type="submit">Confirm Order</Button>
                    </Box>
                </Grid>


                <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                    <img src={watch?.img} alt='watch' style={{ width: '70%', height: '250px' }} />
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }} variant="h5" gutterBottom component="div">
                        {watch?.title}
                    </Typography>
                    <Typography sx={{ fontFamily: 'Poppins' }} variant="h6" gutterBottom component="div">
                        ${watch?.price}
                    </Typography>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 'bold', my: 2 }} variant="p" gutterBottom component="div">
                        Description:
                    </Typography>
                    <Typography sx={{ fontFamily: 'Poppins' }} variant="subtitle1" gutterBottom component="div">
                        {watch?.description}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Purchase;