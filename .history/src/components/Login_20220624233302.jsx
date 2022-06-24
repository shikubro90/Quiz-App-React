import React from 'react';
import {Box} from '@mui/material'
import { TextField } from '@mui/material';

const Login = () => {
    return (
        <Box>
            <form>
                
            <TextField 
            label="Email"
            name="email"
            variant='outlined'
            />
            </form>
        </Box>
    );
};

export default Login;