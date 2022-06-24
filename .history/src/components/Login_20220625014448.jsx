import React from 'react';
import {Box, Button, Card, CardContent} from '@mui/material'
import { TextField } from '@mui/material';
import Center

const Login = () => {
    return (

        <Card sx={{width: "400px"}}>
            <CardContent>
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
            </CardContent>
        </Card>
    );
};

export default Login;