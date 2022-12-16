import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
// import { Grid, Container, Typography, Paper, Button } from '@mui/material';
import { Button, TextField } from '@mui/material';
import {Box,Icon,Typography,CardMedia,CssBaseline,Grid,Container,FormControlLabel, Checkbox, makeStyles} from '@material-ui/core';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
// import CoolerBoxIMG from '../assets/images/cooler-box.png';
import CoolerBoxIMG from '../assets/images/save-money.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const useStyles = makeStyles((theme) => ({
  textField: {
  padding: '8px',
   border: '0px solid grey',
  },
  paper: {
    display: "flex",
    width: "auto",
  },
  grid: {
    width: "auto",
  },
  arrow: {
    padding: theme.spacing(3),
  },
  box: {
  //   padding: theme.spacing(3),
    paddingLeft: theme.spacing(8),
  },
}));

export default function CreateCoolerPage() {
  const classes = useStyles();
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const location = useLocation();
    let today = new Date().toISOString().slice(0, 10);
     console.log('Arry data: ', location.state);

   
  return (
    <>
      <Helmet>
        <title> Cooler | Create Cooler </title>
      </Helmet>

      <Container maxWidth="xl">
      <CssBaseline/> 

       {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
       <Grid container spacing={3}>
        <Grid item xs={3}>
        <Button variant="contained" style={{minHeight: '45px', minWidth: '55px', backgroundColor: '#348AED', }}
              onClick={() => {
                navigate(-1);
              }}>
                <ArrowBackIcon />
                Back
            </Button>
        </Grid>
      </Grid>
       <>
        <Grid container spacing={2} justify="center" style={{marginTop:"2rem", marginBottom:"2rem"}}>
       
        <Grid item xs={6}>
        <center>
        <Typography variant="h4">
         <b>SPACE SAVER</b>
        </Typography>
        </center>
        <br/>
      <CardMedia
       style={{border: '1px solid black', backgroundColor: '#fff', paddingLeft: '30px', paddingRight: '30px'}}
        component="img"
        height="250"
        image={CoolerBoxIMG}
        alt="Paella dish"
      />
          <center>
          <Button variant="contained" style={{minHeight: '45px', minWidth: '145px', backgroundColor: '#348AED', marginTop: '15px' }}>
                    <b>UPLOAD</b> 
          </Button>
          </center>
              <br/>
      
    </Grid>
       

      </Grid>

      <Grid item xs container direction="column" spacing={6} style={{paddingLeft: '100px', paddingRight: '100px'}}>
                <Grid item xs>
                  <div style={{display: 'flex', marginBottom: '-20px'}}>
                  <h2 style={{ fontSize: '19px', width: '40%'}}><b>COOLER NAME: </b></h2>
                    &nbsp; &nbsp;
                    <TextField id="outlined-basic" fullWidth label="Enter Cooler Name" variant="outlined" />
                  </div>
                  <br/><br/>
                  <div style={{display: 'flex'}}>
                  <h2 style={{ fontSize: '19px', width: '10%', border: '0px solid red'}}><b>FEE: </b></h2>
                    &nbsp; &nbsp;
                    <TextField id="outlined-basic" style={{width: '30%'}} label="Enter Fee" variant="outlined" />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <h2 style={{ fontSize: '19px', width: '10%', border: '0px solid red'}}><b>START: </b></h2>
                    &nbsp; &nbsp;
                    <TextField
               className={classes.textField}
                id="date"
                label=""
                type="date"
                // defaultValue="2022-08-28"
                defaultValue={today}
                sx={{ width: 220, fontSize: '20px' }}
                InputLabelProps={{
                shrink: true,
                }}
            />
                  </div>
                  <br/>
                  <div style={{display: 'flex'}}>
                  <h2 style={{ fontSize: '19px', width: '10%', border: '0px solid red'}}><b>COUNT: </b></h2>
                    &nbsp; &nbsp;
                    <TextField id="outlined-basic" style={{width: '30%'}} label="Enter Count" variant="outlined" />
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <h2 style={{ fontSize: '19px', width: '10%', border: '0px solid red'}}><b>PIN: </b></h2>
                    &nbsp; &nbsp;
                    <TextField
                    id="outlined-number"
                    label="Enter Pin"
                    type="number"
                    variant="outlined"
                    // InputLabelProps={{
                    //   shrink: true,
                    // }}
                  />
                  </div>

                 
                </Grid>
                <div style={{border: '1px solid grey', width: '100%'}}></div>
                <br/>
                 <center>
                 <Button variant="contained" style={{minHeight: '45px', maxWidth: '100px', backgroundColor: '#348AED'}}
                //  onClick={} 
                 >
                    <b>SUBMIT</b> 
                </Button>
                 </center>
              </Grid>


    </>
      </Container>
    </>
  );
}
