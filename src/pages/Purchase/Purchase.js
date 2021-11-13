import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Button, Grid, Container, TextField, Paper, ButtonBase, Typography } from '@mui/material';
import { Box } from '@mui/system';

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
            <Grid container spacing={2} columns={12}>
                <Grid item xs={12} md={4}>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>

                        <TextField sx={{ width: { lg: '100%', md: '90%', xs: '80%' }, my: 2 }} {...register("name")} defaultValue={user.displayName} type="text" id="standard-basic" label="Full Name" variant="standard" required />

                        <TextField sx={{ width: { lg: '100%', md: '90%', xs: '80%' }, my: 2 }}  {...register("email")} defaultValue={user.email} type="email" id="standard-basic" label="Enter Email" variant="standard" required />

                        <TextField sx={{ width: { lg: '100%', md: '90%', xs: '80%' }, my: 2 }} {...register("phone")} type="tel" id="standard-basic" label="Phone Number" variant="standard" required />

                        <TextField sx={{ width: { lg: '100%', md: '90%', xs: '80%' }, my: 2 }} {...register("address1")} type="text" id="standard-basic" label="Apartment or floor" variant="standard" required />

                        <TextField sx={{ width: { lg: '100%', md: '90%', xs: '80%' }, my: 2 }} {...register("address2")} type="text" id="standard-basic" label="Road No such as 1234 Main St" variant="standard" required />

                        <TextField sx={{ width: { lg: '100%', md: '90%', xs: '80%' }, my: 2 }} {...register("city")} type="text" id="standard-basic" label="City" variant="standard" required />

                        <Button sx={{ background: '#A99577', border: '2px solid #A99577', borderRadius: '0', marginTop: '10px', transition: 'all ease-in-out 0.2s', color: 'white', mb: '3', width: '100%', '&:hover': { background: 'transparent', color: 'black', border: '2px solid black' } }} type="submit">Confirm Order</Button>
                    </Box>
                </Grid>


                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2, margin: 'auto', maxWidth: '90%', flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {watch.title}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Full resolution 1920x1080 • JPEG
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ID: 1030114
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <ButtonBase sx={{ width: 250, height: 180 }}>
                                    <img style={{ width: '100%', height: '100%' }} alt="complex" src={watch.img} />
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Purchase;