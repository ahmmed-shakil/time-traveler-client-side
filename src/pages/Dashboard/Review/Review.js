import { Button, TextField, Typography, Alert } from '@mui/material';
import { Box, textAlign } from '@mui/system';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import useAuth from '../../../hooks/useAuth';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const Review = () => {
    const { user } = useAuth();
    const [value, setValue] = React.useState(2);
    const [submit, setSubmit] = React.useState(false);
    console.log(value)
    const [hover, setHover] = React.useState(-1);
    const { reset, register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.rating = value;
        data.img = user.photoURL;
        //send review to database
        fetch('https://enigmatic-brook-72353.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(() => {
                reset();
                setSubmit(true);
            })
    }
    return (
        <Box component="form" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', my: 5 }} onSubmit={handleSubmit(onSubmit)}>
            {
                submit && <Alert sx={{ my: '3' }} severity="success">Thank You For Your Review!</Alert>
            }
            <Typography variant="h5" sx={{ my: 3 }}>Share Your Opinion</Typography>
            <Box
                sx={{
                    width: { lg: '45%', md: '65%', xs: '80%' },
                    my: 1,
                    mt: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start'
                }}

            >
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.1}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    size="large"
                />
                {value !== null && (
                    <Box sx={{ ml: 4 }} >{labels[hover !== -1 ? hover : value]}</Box>
                )}
            </Box>
            <Box
                sx={{
                    width: { lg: '45%', md: '65%', xs: '80%' },
                    mt: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start'
                }}

            >
                <TextField defaultValue={user?.displayName} variant="standard" placeholder="name" sx={{ width: '48%', textAlign: 'center' }} {...register("name")} />

                <TextField defaultValue={user?.email} variant="standard" placeholder="email" sx={{ ml: 1, width: '48%', textAlign: 'center' }} {...register("email")} />
            </Box>
            <TextField variant="standard" placeholder="Write Your Review" rows={3} multiline sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2, resize: 'vertical' }} type="number" {...register("review", { min: 18, max: 99 })} />

            <Button sx={{ background: 'transparent', border: '2px solid black', borderRadius: '0', py: '10px', px: '25px', marginTop: '10px', transition: 'all ease-in-out 0.5s', color: 'black', mb: '3', '&:hover': { background: '#cfb54c', color: 'white', border: '2px solid #cfb54c' } }} type="submit" >Submit Review</Button>
        </Box>
    );
};

export default Review;