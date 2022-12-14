import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Paper, Button } from '@mui/material';
import Iconify from '../components/iconify';
import MembersRowCard from 'src/components/members/members-row-card';



export default function MembersPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Cooler | Members </title>
      </Helmet>

      <Container maxWidth="xl">
          {/* <SearchBox style={{ width: '100%' }} /> */}
          <br/>
          <Grid  container direction="row" justifyContent="flex-end" alignItems="flex-end">
          <Button variant="contained" style={{backgroundColor: "#348AED", paddingTop: '10px', paddingBottom: '10px',  paddingRight: '30px', paddingLeft: '30px'}} startIcon={<Iconify icon="eva:plus-fill" />}>
          ADD MEMBER
        </Button>
        </Grid>
          <br/>
          <MembersRowCard 
          name={"PAUL JONES"} 
          email={"paul.jones@target.com"} 
          joined={"01.01.2023"}
          status={"Invited"}
          />
          <MembersRowCard 
          name={"PATRICIA SMITH"} 
          email={"patricia.smith@target.com"} 
          joined={"01.01.2023"}
          status={"Paid"}
          />
          <MembersRowCard 
          name={"LARRY WILLIAMS"} 
          email={"larry.williams@target.com"} 
          joined={"01.01.2023"}
          status={"Not Paid"}
          />
      </Container>
    </>
  );
}