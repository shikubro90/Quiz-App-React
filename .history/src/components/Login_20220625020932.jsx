import React from 'react';
import {Box, Button, Card, CardContent, Typography} from '@mui/material'
import { TextField } from '@mui/material';
import Center from './Center'

const Login = () => {
    return (
        <Center>
            <Card 
                sx={{width: "400px"}}>

                <CardContent 
                    sx={{textAlign: 'center'}}
                >
                    <Typography

                    <Box sx={{
                        '& .MuiTextField-root' : {
                            m:1,
                            width: "90%"
                        }
                    }}>
                        <form noValidate
                        >    
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
        </Center>
    );
};

export default Login;