import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
// import { Grid, Container, Typography, Paper, Button } from '@mui/material';
import { Button, TextField } from '@mui/material';
import {Box,Icon,Typography,CardMedia,CssBaseline,Grid,Container,FormControlLabel, Checkbox} from '@material-ui/core';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
// import CoolerBoxIMG from '../assets/images/cooler-box.png';
import CoolerBoxIMG from '../assets/images/save-money.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function PrivateCoolerJoin() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const location = useLocation();
     console.log('Arry data: ', location.state);

    const publicKey = 'pk_test_41be8d2866325ed0e9bcf8734f6d31706640d968';
    let amount = 100000;

    const componentProps = {
        amount: amount,
        // metadata: {
        //   name,
        // },
        publicKey,
        text: "Pay Now",
        onSuccess: () => {
          handleSubmit();
        },
        onClose: () => alert("Wait! Don't leave :("),
      }
      
      const handleSubmit = () => {
        // let today = new Date().toLocaleDateString()
        //  dispatch(buyBootcamp(state, user.uid, today, history));
      }

    const validatePayment = (initializePayment) => {

      }
  return (
    <>
      <Helmet>
        <title> Cooler | Join Private Cooler </title>
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
      <CardMedia
       style={{border: '1px solid black', backgroundColor: '#fff', paddingLeft: '30px', paddingRight: '30px'}}
        component="img"
        height="250"
        image={CoolerBoxIMG}
        alt="Paella dish"
      />

           <Grid item xs container direction="column" spacing={0} justifyContent="center" alignItems="center">
                <Grid item xs>
                  <div style={{display: 'flex', border: '0px solid red', marginBottom: '-20px'}}>
                  <h2 style={{ fontSize: '19px'}}><b>NAME: </b></h2>
                    &nbsp; &nbsp;
                  <p style={{ fontSize: '17px'}}>{"SPACE SAVERS"}</p>
                  </div>
                  <div style={{display: 'flex', marginBottom: '-20px'}}>
                  <h2 style={{ fontSize: '19px'}}><b>FEE: </b></h2>
                    &nbsp; &nbsp;
                  <p style={{ fontSize: '17px'}}>{"$500"}</p>
                  </div>
                  
                  <div style={{display: 'flex', marginBottom: '-10px' }}>
                  <h2 style={{ fontSize: '19px'}}><b>COUNT: </b></h2>
                    &nbsp; &nbsp;
                  <p style={{ fontSize: '17px'}}>{"6 OF 10 SAVERS"}</p>
                  </div>

                  <div style={{display: 'flex' }}>
                  <h2 style={{ fontSize: '19px'}}><b>START: </b></h2>
                    &nbsp; &nbsp;
                  <p style={{ fontSize: '17px'}}>{"01.01.2023"}</p>
                  </div>

                  <div style={{display: 'flex' }}>
                  <h2 style={{ fontSize: '19px'}}><b>PIN: </b></h2>
                    &nbsp; &nbsp;
                  <TextField
                    id="outlined-number"
                    label="-"
                    type="number"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{border: '1px solid black'}}
                  />
                  </div>
                </Grid>
                <br/>
                <div style={{border: '1px solid grey', width: '100%'}}></div>
                <br/>
            <PaystackConsumer {...componentProps} >
                {({initializePayment}) => 
                 <Button variant="contained" style={{minHeight: '45px', minWidth: '145px', backgroundColor: '#348AED', }}
                 onClick={() => {validatePayment(initializePayment)}} 
                 >
                    <b>SUBMIT</b> 
                </Button>
                }
            </PaystackConsumer>  
              </Grid>
      
    </Grid>
       

      </Grid>
    </>
      </Container>
    </>
  );
}
