import * as React from 'react';
import Typography from '@mui/material/Typography';
// import Title from './title';
import { Button, Divider, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { fCurrency } from 'src/utils/formatNumber';
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Star from '../../assets/images/star.png'


const useStyles = makeStyles((theme) => ({
  circle: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: '1px solid black',
    // backgroundColor: 'white',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: 'black',
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
}));

export default function BadgeBox() {
  const classes = useStyles();
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Typography
            color="textPrimary"
            variant="h6"
            component="p"
          >
        <b>BADGE</b>
      </Typography>
      <Divider />
      <br/>
        <center>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
    <Grid item xs={4}>
     <img src={Star} height='120'/>
    </Grid>
    <Grid item xs={4}>
    <div elevation={3} className={classes.circle}>
      9
    </div>
    </Grid>
    </Grid>
    </center>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: '10px' }}>
      <div></div>
      <Button
        variant="contained"
        style={{
          minHeight: "35px",
          minWidth: "100px",
          backgroundColor: "black",
          border: "1px solid black",
        }}
      >
        UPDATE
      </Button>
    </div>
        </>
    );
    }