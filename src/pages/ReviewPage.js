import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import Form from '../components/Form/Form'

const ReviewPage = () => {
  return (
   <Container>
    <Grid container spacing={2} marginTop={15}>
      <Grid item xs={4}>
        <Typography marginBottom={.5} variant="h3" component="h1">Leave A Review</Typography>
        <Typography gutterBottom variant="h5" component="h3">And Check Our Database</Typography>
        <Typography variant="body1" component="p">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</Typography>
      </Grid>
      <Grid item xs={6}>
        <Form />
      </Grid>
    </Grid>
   </Container>
  )
}

export default ReviewPage
