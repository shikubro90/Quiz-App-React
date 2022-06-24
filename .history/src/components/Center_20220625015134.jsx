import { Grid } from '@mui/material'
import React from 'react'

const Center = (props) => {
  return (
    <Grid 
    container
    direction="column"
    alignItem ="center"
    justifyContent="center"
    sx={{minHeight : "}}>
        <Grid item sx={2}>
            {props.children}
        </Grid>
    </Grid>
  )
}

export default Center