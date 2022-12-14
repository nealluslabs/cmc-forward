import * as React from 'react';
import Typography from '@mui/material/Typography';
// import Title from './title';
import { Button, Divider, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


function preventDefault(event) {
  event.preventDefault();
}

export default function WalletBox({type, BoxIcon}) {

  return (
    <>
      <Typography
            color="textPrimary"
            variant="h6"
            component="p"
          >
        <b>Wallet</b>
      </Typography>
      <Divider />
      <br/><br/>
      <center>
        <Typography
            color="textPrimary"
            variant="h3"
            component="p"
          >
        <b>$101.75</b>
      </Typography></center>
      <br/>
      {/* <div> */}
        <center>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
    <Grid item xs={6}>
    <Button variant="contained" fullWidth  style={{backgroundColor: "#348AED", padding: '15px'}}>
        TRANSFER
    </Button>
    </Grid>
    <Grid item xs={6}>
    <Button variant="contained" fullWidth  style={{backgroundColor: "#348AED", padding: '15px'}}>
        WITHDRAW
    </Button>
    </Grid>
    </Grid>
        </center>
        {/* </div> */}
        </>
    );
    }