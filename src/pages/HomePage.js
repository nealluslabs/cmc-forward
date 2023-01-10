import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Paper, Button } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeBox from '../components/home/home-box';
import WalletBox from 'src/components/home/wallet-box';
import RowCard from 'src/components/home/row-card';
import PieChartCard from 'src/components/home/pie-chart-card';
import { useNavigate } from 'react-router-dom';




export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title> Cooler | HOME </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={2}>
            <Grid item xs={12} md={8} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                  border: '1px solid black'
                }}
              >
                {/* <HomeBox type={'JOBS'} BoxIcon={WorkOutlineIcon} /> */}
                <PieChartCard />
              </Paper>
            </Grid>

             <Grid item xs={12} md={8} lg={6}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                  border: '1px solid black'
                }}
              >
                <WalletBox type={'PROFILE'}  BoxIcon={AccountCircleIcon}/>
              </Paper>
            </Grid>
          </Grid>
          <br/>
          {/* <SearchBox style={{ width: '100%' }} /> */}
          <br/>
          <Grid  container direction="row" justifyContent="flex-end" alignItems="flex-end">
          <Button variant="contained" style={{backgroundColor: "#348AED", paddingTop: '10px', paddingBottom: '10px',  paddingRight: '30px', paddingLeft: '30px'}}
          onClick={()=>{
            navigate('/dashboard/cooler', { replace: true });
          }}
          >
          CREATE
        </Button>
        </Grid>
          <br/>
          <RowCard />
      </Container>
    </>
  );
}
