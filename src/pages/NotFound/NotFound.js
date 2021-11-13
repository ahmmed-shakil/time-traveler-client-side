import { Box } from '@mui/system';
import React from 'react';
import Navigation from '../Shared/Navigation/Navigation/Navigation'

const NotFound = () => {
    return (
        <Box>
            <Navigation></Navigation>
            <div style={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box>
                    <h2 style={{ color: 'red' }}>404</h2>
                    <p>Page not found!</p>
                </Box>
            </div>
        </Box>
    );
};

export default NotFound;