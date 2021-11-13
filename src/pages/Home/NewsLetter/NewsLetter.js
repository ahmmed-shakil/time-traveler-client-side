import { Button, Typography } from '@mui/material';
import React from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className="newsletter" style={{ backgroundImage: 'url(https://i.ibb.co/GWtszNt/background-footer.jpg)', height: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: '0.9' }}>
            <Typography variant="h6" sx={{ color: 'white', py: 1 }} className="Titillium">Subscribe to Our NewsLetter</Typography>
            <input style={{ display: 'block', backgroundColor: 'white', padding: '0.7rem' }} />
            <Button variant="contained" sx={{ my: 1 }}>Subscribe</Button>

        </div >
    );
};

export default NewsLetter;