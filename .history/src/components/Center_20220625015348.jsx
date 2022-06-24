import { Grid } from '@mui/material'
import React from 'react'

const Center = (props) => {
  return (
    <Grid 
    container
    direction="column"
    ali ="center"
    justifyContent="center"
    sx={{minHeight : '100vh'}}>
        <Grid item sx={1}>
            {props.children}
        </Grid>
    </Grid>
  )
}

export default Center