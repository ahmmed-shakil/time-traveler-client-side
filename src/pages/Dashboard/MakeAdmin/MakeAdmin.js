import { TextField, Typography, Button, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleFormSubmit = e => {

        const user = { email };

        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 5 }}>

            <Box component="form" sx={{ textAlign: 'center', width: { xs: "90%", md: "50%" } }} onSubmit={handleFormSubmit}>
                <Typography variant="h5" sx={{ textAlign: 'center', my: 5 }}>UPGRADE USER ROLE TO ADMIN </Typography>
                <TextField
                    variant="standard"
                    type="email"
                    placeholder="Type an Email Address"
                    onBlur={handleOnBlur}
                    hiddenLabel
                    fullWidth
                    sx={{ my: 1 }}
                ></TextField>
                <Button type="submit" size="large" sx={{ background: 'black', border: '2px solid black', borderRadius: '0', py: '10px', px: '25px', marginTop: '10px', my: 3, width: '100%', color: 'white', transition: 'all ease-in-out 0.2s', '&:hover': { background: 'transparent', color: 'black', border: '2px solid black' } }}>Make Admin</Button>
                {success && <Alert severity="success">USER ROLE UPGRADED TO ADMIN SUCCESSFULLY!</Alert>}
            </Box>
        </Box >
    );
};

export default MakeAdmin;