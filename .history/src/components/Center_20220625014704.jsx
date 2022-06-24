import { Grid } from '@mui/material'
import React from 'react'

const Center = (props) => {
  return (
    <Grid container sx={{min}}>
        <Grid item sx={1}>
            {props.children}
        </Grid>
    </Grid>
  )
}

export default Center