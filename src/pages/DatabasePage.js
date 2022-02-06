import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Typography, Grid, Paper, TextField } from '@mui/material'
import Card from '../components/Card/Card'

const DatabasePage = () => {
  const [listOfReviews, setListOfReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then((response) => {
        setListOfReviews(response.data)
      })
      .catch(() => {
        console.log('ERROR.')
      })
  }, [])

  console.log(searchTerm)

  return (
    <Container>
      <Typography color="white" align='center' marginTop={5} variant='h2' component="h1" marginBottom={8}>Browse Our Database</Typography>
      <Paper elevation={12} sx={{display: "flex", justifyContent: "space-around", alignItems: "center", height: "5rem", marginBottom: "5rem", backgroundColor: "#2E7D32"}}>
        <TextField sx={{width: "300px", backgroundColor: "white"}} type="text" label="Filter By Strain" placeholder='Strain Name' onChange={(e) => setSearchTerm(e.target.value)} />
        <TextField sx={{width: "300px", backgroundColor: "white"}} type="text" label="Filter By Rating" placeholder='Rating' onChange={(e) => setSearchTerm(e.target.value)} />
        <TextField sx={{width: "300px", backgroundColor: "white"}} type="text" label="Filter By Consumption Method" placeholder='Consumption Method' onChange={(e) => setSearchTerm(e.target.value)} />
      </Paper>
      <Grid container spacing={5}>
        {/* {listOfReviews.map((reviews) => (
          <Card reviews={reviews} />
        ))} */}
        {listOfReviews.filter((reviews) => {
          if(searchTerm == "") {
            return reviews
          } else if(reviews.strainName.toLowerCase().includes(searchTerm.toLowerCase())) {
            return reviews
          } else if(reviews.rating.includes(searchTerm)) {
            return reviews
          } else if(reviews.consumptionMethod.toLowerCase().includes(searchTerm.toLowerCase())) {
            return reviews
          }
        }).map((reviews, key) => (
          
          <Card reviews={reviews} key={key} />
          
        ))}
      </Grid>
    </Container>
  )
}

export default DatabasePage
