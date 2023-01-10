import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Paper } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import HomeBox from '../components/home/home-box';




export default function CoolersPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Cooler | Cooler Type </title>
      </Helmet>

      <Container maxWidth="xl">
          <center><Typography
            variant="h3"
            component="p"
          >
        <b>CREATE COOLER</b>
      </Typography></center>
      <br/><br/>
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
                <HomeBox type={'PUBLIC'} BoxIcon={LockOpenIcon} url={"/dashboard/create-cooler"}/>
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
                <HomeBox type={'PRIVATE'}  BoxIcon={LockIcon} url={"/dashboard/create-cooler"}/>
              </Paper>
            </Grid>
          </Grid>
      </Container>
    </>
  );
}
