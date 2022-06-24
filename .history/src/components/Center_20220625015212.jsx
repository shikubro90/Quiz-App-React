import { Grid } from '@mui/material'
import React from 'react'

const Center = (props) => {
  return (
    <Grid 
    container
    direction="column"
    alignItem ="center"
    justifyContent="center"
    xs={{minHeight : '100vh'}}>
        <Grid item xs={1}>
            {props.children}
        </Grid>
    </Grid>
  )
}

export default Center