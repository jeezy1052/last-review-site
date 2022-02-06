import React from 'react'
import { Box } from '@mui/system'
import { Typography, Container, Grid, Button } from '@mui/material'


const Header = () => {
  return (
    <Container padding={10} >
      <Grid marginTop={10} container spacing={1}>
        <Grid  item xs={6} >
          <img src='https://images.unsplash.com/photo-1513909894411-7d7e04c28ecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60' />
        </Grid>
        <Grid item xs={6} >
          <Box>
            <Container sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "30%"

            }}>
            <Typography marginBottom={0.5} variant="h3" component="h1">Check Our Database</Typography>
            <Typography marginBottom={0.5} variant="h4" component="h2">Or Leave A Review</Typography>

            <Typography marginBottom={0.5} variant="body1" component="p">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </Typography>
            <Button variant="contained">Leave a Review</Button>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Header
