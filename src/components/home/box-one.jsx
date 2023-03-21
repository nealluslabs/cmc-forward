import * as React from 'react';
import Typography from '@mui/material/Typography';
// import Title from './title';
import { Button, Divider, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { fCurrency } from 'src/utils/formatNumber';


export default function BoxOne() {
  const { user } = useSelector((state) => state.auth);

  return (
    <Grid container spacing={3} sx={{mt: 1}}>
      <Grid item xs={6}>
      <center>
      <Typography
            color="textPrimary"
            variant="h6"
            component="p"
          >
        <b>VIDEOS</b>
      </Typography>
      </center>
      <br/>
      <center>
        <Typography
            color="textPrimary"
            variant="h1"
            component="p"
          >
        <b>11</b>
      </Typography></center>
      </Grid>
      <Grid item xs={6}>
      <center>
      <Typography
            color="textPrimary"
            variant="h6"
            component="p"
          >
        <b>CONTRACTS</b>
      </Typography>
      </center>
      <br/>
      <center>
        <Typography
            color="textPrimary"
            variant="h1"
            component="p"
          >
        <b>3</b>
      </Typography></center>
      </Grid>
    </Grid>
  );
}