import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
// import { Grid, Container, Typography, Paper, Button } from '@mui/material';
import { Button } from '@mui/material';
import {Box,Icon,Typography,CardMedia,CssBaseline,Grid,Container,FormControlLabel, Checkbox} from '@material-ui/core';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
// import CoolerBoxIMG from '../assets/images/cooler-box.png';
import CoolerBoxIMG from '../assets/images/save-money.png';


export default function CoolerDetails() {
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
        <title> Cooler | Cooler Details </title>
      </Helmet>

      <Container maxWidth="xl">
      <CssBaseline/> 

       {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
       <Grid container spacing={3}>
        <Grid item xs={3}>
        <Button variant="contained" style={{minHeight: '45px', minWidth: '145px', backgroundColor: '#348AED', }}
              onClick={() => {
                // navigate('/dashboard/cooler-details')
              }}>
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
      <br/><br/>
 {/* {
  location.state.map(c => {
    return (
      <>
      <Grid container spacing={2} style={{borderTop: '1px solid black'}}>
      <Grid item xs={8} md={14}>
       <FormControlLabel 
      control={
      <Checkbox 
      style={{color: 'black'}}
      checked={state.type.index} 
      name={c.label} 
      value={state.type[c.label]} 
      onChange={checkboxChange}
       />}  
       label={<span style={{ fontSize: '17px' }}>{c.label}</span>} />
      </Grid>
      <Grid item xs={6} md={2}>
      </Grid>
      </Grid>
      
      </>
    )
  })
 } */}
  <hr style={{borderTop: '1px solid grey'}}/>
  <br/>

            <PaystackConsumer {...componentProps} >
                {({initializePayment}) => 
                 <Button variant="contained" style={{minHeight: '45px', minWidth: '145px', backgroundColor: '#348AED', }}
                 onClick={() => {validatePayment(initializePayment)}} 
                 >
                    <b>PAY</b> 
                </Button>
                }
            </PaystackConsumer>  
      
    </Grid>
       

      </Grid>

      <hr/>
    </>
      </Container>
    </>
  );
}
