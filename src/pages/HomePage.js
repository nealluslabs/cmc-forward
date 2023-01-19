import { Helmet } from 'react-helmet-async';
import { Grid, Container, Typography, Paper, Button, Stack, Skeleton } from '@mui/material';
import { useEffect } from 'react';
import { fCurrency } from '../utils/formatNumber';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EmptyRowCard from 'src/components/home/empty-row-card';
import { fetchGroups, fetchMyGroups } from 'src/redux/actions/group.action';
import MyCoolersRowCard from 'src/components/my-cooler/my-coolers-card';
import PieChartCard from 'src/components/home/pie-chart-card';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WalletBox from 'src/components/home/wallet-box';



export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { myGroups, isLoading } = useSelector((state) => state.group);

  useEffect(() => {
    dispatch(fetchMyGroups(user.coolers));
  }, [])


  console.log("MY GROUPS: ", myGroups);
const myCoolerGroups = myGroups?.length ? (
  myGroups.map(group => {
    return (
      <MyCoolersRowCard 
      groupId={group.groupId}
      name={group.groupName} 
      fee={fCurrency(group.amount)}
      count={`${group.members.length} OF ${group.noOfSavers} SAVERS`}
      img={group.imageUrl}
      members={group.members}
      isMember={group.members.includes(user.id)}
      startDate={group.startDate}
      />
    )
  })
) : 
<>
<EmptyRowCard />
</>


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
          {
        isLoading ?
        <Stack>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
        </Stack>
        :
        myCoolerGroups
      }
      </Container>
    </>
  );
}
