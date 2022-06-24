import React from 'react';
import {Box, Button, Card} from '@mui/material'
import { TextField } from '@mui/material';
import { width } from '@mui/system';

const Login = () => {
    return (

        <Card>
            
        </Card>

        <Box sx={{
            '& .MuiTextField-root' : {
                m:1,
                width: "90%"
            }
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

                <Button sx={{width: "90%"}}
                type='submit'
                variant='contained'
                size='large'
                >Start</Button>
            </form>
        </Box>
    );
};

export default Login;