import React from 'react';
import {Box} from '@mui/material'
import { TextField } from '@mui/material';

const Login = () => {
    return (
        <Box>
            <TextField 
            lable="Email"
            name="email"
            variant='outline'
            />
        </Box>
    );
};

export default Login;