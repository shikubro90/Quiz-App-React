import React from 'react';
import {Box, Button} from '@mui/material'
import { TextField } from '@mui/material';

const Login = () => {
    return (
        <Box sx={{
            ``
        }}>
            <form noValidate>    
                <TextField 
                label="Email"
                name="email"
                variant='outlined'
                />

                <TextField 
                label="Name"
                name="name"
                variant='outlined'
                />

                <Button
                type='submit'
                variant='contained'
                size='large'
                >Start</Button>
            </form>
        </Box>
    );
};

export default Login;