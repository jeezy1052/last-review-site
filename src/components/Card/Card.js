import React from 'react'
import { Paper, Grid, Typography, Box, Rating, createTheme, ThemeProvider } from '@mui/material'
import { AccessTime } from '@mui/icons-material'
import ImageOne from '../../piv1.jpg'


const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2"
          },
          style: {
            fontSize: 13,
          },
        },
        {
          props: {
            variant: "body3"
          },
          style: {
            fontSize: 10,
            
          },
        },
      ],
    },
  },
});

const Card = ({reviews}) => {
  return (
    <Grid item xs={12} sm={6} lg={3}>
    <ThemeProvider theme={theme}>
      <Paper elevation={8}>
        <img style={{borderTopRightRadius: "5px", borderTopLeftRadius: "5px"}} src={ImageOne} className="img" alt="" />
        <Box paddingX={1}>
          <Typography marginBottom={1} component="h2" variant="h6">{reviews.strainName}</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }} 
          >  
            {/* <AccessTime sx={{width: 12.5}} /> */}
            <Typography marginBottom={1.5} variant="body1" component="p" marginLeft={0.5}>created by: {reviews.userName}</Typography>
          </Box>
            <Box>
              <Typography variant="body2"  component="p" marginLeft={0.5}>consumption method: ({reviews.consumptionMethod})</Typography>
            </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }} 
            marginTop={3}
          >  
            <Rating readOnly value={reviews.rating} name="read-only" precision={0.5} size="small" />
            {/* <Typography variant="body2" component="p" marginLeft={0.5}>{reviews.rating}</Typography> */}
            <Typography variant="body3" component="p" marginLeft={1.5}>({reviews.rating} stars)</Typography>
          </Box>
          <Box>
           <Typography variant="body2" component="p" marginTop={2}>{reviews.review}</Typography>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
    </Grid>
  )
}

export default Card
