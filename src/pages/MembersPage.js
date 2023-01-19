import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Paper, Button, Stack, Skeleton } from '@mui/material';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Iconify from '../components/iconify';
import MembersRowCard from 'src/components/members/members-row-card';
import { fetchEmployeer, fetchGroupMembers } from 'src/redux/actions/group.action';



export default function MembersPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { groupMembers, employeer, isLoading } = useSelector((state) => state.group);
  const groupData = location.state?.groupData;


  useEffect(() => {
    dispatch(fetchGroupMembers(groupData?.members));
    dispatch(fetchEmployeer(user.employeerID));
  }, [])

  console.log("GROUP MEMBERS: ", groupMembers);
  console.log("Employeer: ", employeer);
  const myCoolerMembers = groupMembers?.length ? (
    groupMembers.map(member => {
      return (
       <>
       {employeer &&
       <MembersRowCard 
       name={employeer.firstName + " " + employeer.lastName} 
       email={employeer.email} 
       joined={employeer.accountCreated}
       status={"Invited"}
       isSelf={true}
     />
       }
      <MembersRowCard 
        name={"PAUL JONES"} 
        email={"paul.jones@target.com"} 
        joined={"01.01.2023"}
        status={"Invited"}
        />
        </>
      )
    })
  ) : 
  <>
      {employeer &&
       <MembersRowCard 
       name={employeer.firstName + " " + employeer.lastName} 
       email={employeer.email} 
       joined={employeer.accountCreated}
       status={"Invited"}
       isSelf={true}
     />
       }
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
  </>

  return (
    <>
      <Helmet>
        <title> Cooler | Members </title>
      </Helmet>
        <center><h2>{groupData?.name.toUpperCase()}</h2></center>
      <Container maxWidth="xl">
          {/* <SearchBox style={{ width: '100%' }} /> */}
          <br/>
          <Grid  container direction="row" justifyContent="flex-end" alignItems="flex-end">
          <Button variant="contained" style={{backgroundColor: "#348AED", paddingTop: '10px', paddingBottom: '10px',  paddingRight: '30px', paddingLeft: '30px'}} startIcon={<Iconify icon="eva:plus-fill" />}>
          ADD MEMBER
        </Button>
        </Grid>
          <br/>
          {
        isLoading ?
        <Stack>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
        </Stack>
        :
        myCoolerMembers
      }
      </Container>
    </>
  );
}