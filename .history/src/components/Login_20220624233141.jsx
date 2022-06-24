import React from 'react';
import {Box} from '@mui/material'
import { TextField } from '@mui/material';

const Login = () => {
    return (
        <Box>
            <TextField 
            labe="Email"
            name="email"
            variant='outlined'
            />
        </Box>
    );
};

export default Login;