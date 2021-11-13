import { Button, TextField, Typography, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddNewProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = React.useState(false);

    const onSubmit = data => {
        axios.post('http://localhost:5000/watches', data)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true);
                    reset();
                }
            })
    };
    return (
        <Box component="form" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>

            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                ADD A NEW WATCH TO STORE
            </Typography>;

            {
                success && <Alert sx={{ my: '3' }} severity="success">The product has been added!</Alert>
            }


            <TextField variant="standard" placeholder="Image Url" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} {...register("img")} />
            <TextField variant="standard" placeholder="Title" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} {...register("title")} />
            <TextField variant="standard" placeholder="price" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} type="text" {...register("price")} />
            <TextField variant="standard" placeholder="specification1" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} type="text" {...register("spec1")} />
            <TextField variant="standard" placeholder="specification2" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} type="text" {...register("spec2")} />
            <TextField variant="standard" placeholder="specification3" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} type="text" {...register("spec3")} />
            <TextField variant="standard" placeholder="Description" rows={3} multiline sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2, resize: 'vertical' }} type="number" {...register("description", { min: 18, max: 99 })} />

            <Button sx={{ background: 'transparent', border: '2px solid black', borderRadius: '0', py: '10px', px: '25px', marginTop: '10px', transition: 'all ease-in-out 0.5s', color: 'black', '&:hover': { background: '#A99577', color: 'white', border: '2px solid #A99577' } }} type="submit" >ADD WATCH</Button>
        </Box>
    );
};

export default AddNewProduct;