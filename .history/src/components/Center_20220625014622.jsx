import { Grid } from '@mui/material'
import React from 'react'

const Center = (props) => {
  return (
    <Grid container>
        <Grid item >
            {props.children}
        </Grid>
    </Grid>
  )
}

export default Center