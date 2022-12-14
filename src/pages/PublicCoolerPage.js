import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Paper, Button } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import HomeBox from '../components/home/home-box';
import PublicCoolerRowCard from 'src/components/public-cooler/public-cooler-card';




export default function PublicCoolerPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Cooler | Public-Coolers </title>
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
          <PublicCoolerRowCard 
          name={"SPACE SAVERS"} 
          fee={"$250"} 
          count={"6 OF 10 SAVERS"}
          status={"Join"}
          />
          <PublicCoolerRowCard 
          name={"TARGET IT SAVERS"} 
          fee={"$100"} 
          count={"3 OF 10 SAVERS"}
          status={"Join"}
          />
          <PublicCoolerRowCard 
          name={"SKRI SAVERS"} 
          fee={"$650"} 
          count={"5 OF 20 SAVERS"}
          status={"Join"}
          />
      </Container>
    </>
  );
}