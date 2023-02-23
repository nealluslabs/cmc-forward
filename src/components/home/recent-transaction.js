import * as React from 'react';
import Typography from '@mui/material/Typography';
// import Title from './title';
import { Button, Divider, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { fCurrency } from 'src/utils/formatNumber';
import { Paper } from '@material-ui/core';


function preventDefault(event) {
  event.preventDefault();
}

export default function RecentTransaction() {
  const { user } = useSelector((state) => state.auth);

  const rowData = [
    {date: '21-01-2023', action: 'Payment', amount: '200'},
    {date: '03-2-2023', action: 'Transfer', amount: '900'},
    {date: '18-10-2022', action: 'Payment', amount: '22,000'},
  ]

  return (
    <>
      <Typography
            color="textPrimary"
            variant="h6"
            component="p"
          >
        <b>Recent Transactions</b>
      </Typography>
      <Divider />
      <Grid container spacing={2}>
  <Grid item xs={4}>
    <h4>DATE</h4>
    {rowData.map((row) => (
      <p>{row.date}</p>
    ))}
  </Grid>
  <Grid item xs={4}>
    <h4>ACTION</h4>
    {rowData.map((row) => (
      <p>{row.action}</p>
    ))}
  </Grid>
  <Grid item xs={4}>
    <h4>AMT</h4>
    {rowData.map((row) => (
      <p>${row.amount}</p>
    ))}
  </Grid>
</Grid>
        </>
    );
    }