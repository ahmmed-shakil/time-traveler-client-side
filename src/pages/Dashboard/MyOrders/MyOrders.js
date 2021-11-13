import { Button, Container, Box, Grid, Card, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import useAuth from './../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://enigmatic-brook-72353.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            });
    }, [])

    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            const url = `https://enigmatic-brook-72353.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingWatches = orders.filter(watch => watch._id !== id);
                        console.log(remainingWatches)
                        setOrders(remainingWatches);
                        alert('Deleted successfully')
                    }
                })
        }
    }


    return (
        <Box>
            {
                !orders?.length ?
                    <h2>You haven't placed any order yet!</h2>
                    :
                    <Container>
                        <h4>MY ORDERS</h4>
                        {
                            orders.map(order => <Grid sx={{ height: { md: '200px', sm: 'auto' }, display: 'flex', alignItems: 'center', my: 3, boxShadow: 3 }} container spacing={3}>
                                <Grid item md={3} sm={12} sx={{ height: '100%', my: 'auto', p: 3 }}>
                                    <img style={{ width: '100%', height: '100%', display: 'block' }} src={order?.orderedItem?.img} alt='order' />
                                </Grid>
                                <Grid item md={9} sm={12}>
                                    <Grid container spacing={3} sx={{ textAlign: 'left', pb: 2 }}>
                                        <Grid item md={6} sm={12}>
                                            <Typography variant="subtitle2" gutterBottom component="div">
                                                Product Information
                                            </Typography>
                                            <Typography variant="p" gutterBottom component="div">
                                                Model: {order?.orderedItem.title}
                                            </Typography>
                                            <Typography variant="p" gutterBottom component="div">
                                                Price: ${order?.orderedItem.price}
                                            </Typography>
                                            <Button onClick={() => handleDeleteOrder(order._id)} sx={{ background: 'red', color: 'white', '&:hover': { background: 'gray', color: 'black' } }}>Delete Order</Button>
                                        </Grid>
                                        <Grid item md={6} sm={12}>
                                            <Typography variant="subtitle2" gutterBottom component="div">
                                                Customer Information
                                            </Typography>
                                            <Typography variant="p" gutterBottom component="div">
                                                Email: {order?.email}
                                            </Typography>
                                            <Typography variant="p" gutterBottom component="div">
                                                Phone: {order?.phone ? order.phone : '00000'}
                                            </Typography>
                                            <Typography variant="p" gutterBottom component="div">
                                                Shipping Address: {order?.address1}, {order?.city}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>)
                        }
                    </Container>
            }
        </Box >
    );
};

export default MyOrders;