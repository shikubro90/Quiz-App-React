import { Grid } from '@mui/material'
import React from 'react'

const Center = (props) => {
  return (
    <Grid container>
        <Grid item>
            {props}
        </Grid>
    </Grid>
  )
}

export default Center