import React, { useState } from 'react'
import { Card, TextField, Grid, CardContent, MenuItem, Button, Container, Box } from '@mui/material'
import axios from 'axios';

const consumption = [
  {
    value: 'Smoking',
    label: 'Smoking',
  },
  {
    value: 'Vape',
    label: 'Vape',
  },
  {
    value: 'Edible',
    label: 'Edible',
  },
  {
    value: 'Dab',
    label: 'Dab',
  },
];

const rating = [
  {
    value: 1,
    label: '(1) Skunk',
  },
  {
    value: 2,
    label: '(2) Fire',
  },
  {
    value: 3,
    label: '(3) Dank',
  },
  {
    value: 4,
    label: '(4) Hall Of Fame',
  },
];



const Form = () => {
  const [postData, setPostData] = useState({ userName: '', strainName: '', consumptionMethod: '', rating: 0, review: ''})
  
  
  // FINISH SENDING DATA TO BACKEND
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/', postData)
      .then(()=> {
        console.log('It fucking worked');
      })
      .catch(() => {
        console.log('It failed to send.')
      })
    
      console.log(postData)
  

  }

  return (
    <Container >
    <form onSubmit={handleSubmit}>
    <Card elevation={8} sx={{backgroundColor: "#2E7D32"}} >
      <CardContent >
        <Grid container spacing={2} padding={3}>
          <Grid item xs={12} sm={6}>
            <TextField sx={{backgroundColor: "white"}}  label="User Name" name="userName" placeholder='Enter first name' variant="outlined" fullWidth onChange={(e) => setPostData({...postData, userName: e.target.value})} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField sx={{backgroundColor: "white"}} label="Strain Name" name="strainName" placeholder='Enter strain name' variant="outlined" fullWidth onChange={(e) => setPostData({ ...postData, strainName: e.target.value})} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField sx={{backgroundColor: "white"}} label="Consumption Method" name="consumptionMethod"  select variant="outlined" fullWidth onChange={(e) => setPostData({ ...postData, consumptionMethod: e.target.value})} >
            {consumption.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField sx={{backgroundColor: "white"}} label="Rating" name="rating" select variant="outlined" fullWidth onChange={(e) => setPostData({ ...postData, rating: e.target.value})}>
            {rating.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>
          </Grid>
          
          <Grid item xs={12} marginBottom={2}>
            <TextField sx={{backgroundColor: "white"}} label="Review" name="review" placeholder='Leave A Review' variant="outlined" fullWidth multiline rows={4} onChange={(e) => setPostData({ ...postData, review: e.target.value})} />
          </Grid>

          <Button   type="submit" variant="contained" fullWidth>SUBMIT</Button>
        </Grid>
      </CardContent>
    </Card>
    </form>
    </Container>
  )
}

export default Form
