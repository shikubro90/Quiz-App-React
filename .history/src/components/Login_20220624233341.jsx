import React from 'react';
import {Box} from '@mui/material'
import { TextField } from '@mui/material';

const Login = () => {
    return (
        <Box>
            <form noValidate>    
                <TextField 
                label="Email"
                name="email"
                variant='outlined'
                />

                <TextField 
                label="Name"
                name="email"
                variant='outlined'
                />
            </form>
        </Box>
    );
};

export default Login;