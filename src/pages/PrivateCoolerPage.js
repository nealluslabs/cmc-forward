import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Paper, Button } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import HomeBox from '../components/home/home-box';
import PrivateCoolerCard from 'src/components/private-cooler/private-cooler-card';




export default function PrivateCoolerPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Cooler | Private-Coolers </title>
      </Helmet>

      <Container maxWidth="xl">
          {/* <SearchBox style={{ width: '100%' }} /> */}
          <br/>
          <Grid  container direction="row" justifyContent="flex-end" alignItems="flex-end">
          <Button variant="contained" style={{backgroundColor: "#348AED", paddingTop: '10px', paddingBottom: '10px',  paddingRight: '30px', paddingLeft: '30px'}}>
          FILTER
        </Button>
        </Grid>
          <br/>
          <PrivateCoolerCard 
          name={"GOD DID SAVERS"} 
          fee={"$2000"} 
          count={"14 OF 22 SAVERS"}
          status={"Join"}
          />
          <PrivateCoolerCard 
          name={"LAMBORGHINI SAVERS"} 
          fee={"$1500"} 
          count={"27 OF 50 SAVERS"}
          status={"Join"}
          />
          <PrivateCoolerCard 
          name={"YATCH SAVERS"} 
          fee={"$600"} 
          count={"7 OF 30 SAVERS"}
          status={"Join"}
          />
      </Container>
    </>
  );
}