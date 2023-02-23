import { Helmet } from 'react-helmet-async';
import { Grid, Container, Typography, Paper, Button, Stack, Skeleton } from '@mui/material';
import { useEffect } from 'react';
import { fCurrency, fNumber } from '../utils/formatNumber';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EmptyRowCard from 'src/components/home/empty-row-card';
import { fetchGroups, fetchMyGroups } from 'src/redux/actions/group.action';
import MyCoolersRowCard from 'src/components/my-cooler/my-coolers-card';
import PieChartCard from 'src/components/home/pie-chart-card';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WalletBox from 'src/components/home/wallet-box';
import { isItLoading } from 'src/redux/reducers/group.slice';
import { fetchUserData } from 'src/redux/actions/auth.action';

import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { BaseOptionChart } from 'src/components/chart2';
import RecentTransaction from 'src/components/home/recent-transaction';


const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;



const CHART_DATA = [50, 50];

export default function HomePage() {
  const theme = useTheme();
    
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { myGroups, isLoading } = useSelector((state) => state.group);

  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      theme.palette.primary.lighter,
      theme.palette.primary.light,
      theme.palette.primary.main,
      theme.palette.primary.dark,
    ],
    labels: [],
    interactions: [],
    stroke: { colors: [theme.palette.background.paper] },
    legend: { floating: true, horizontalAlign: 'center', show:false },
    tooltip: {
      enabled: false
  },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            value: {
              formatter: (val) => fNumber(0),
            },
            total: {
              formatter: (w) => {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                console.log("user?.accruedBalance: ", user?.accruedBalance);
                return user?.accruedBalance === 0 ? "$0" : fCurrency(user?.accruedBalance);
                // return fNumber(0);
              },
            },
            hover: {
              enabled: false
          },
          },
        },
      },
    },
  });



  useEffect(() => {
    if(user?.id == undefined){
     return navigate("/login");
    }
   }, [])

  useEffect(() => {
    dispatch(fetchMyGroups(user?.coolers));
  }, [user])

  useEffect(() => {
    dispatch(fetchUserData(user?.id));
  }, [])


  console.log(user, ":USER");
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
      isMember={group.members.includes(user?.id)}
      startDate={group.startDate}
      />
    )
  })
) : 
<>
<EmptyRowCard msg={"Coolers you have joined will appear here."}/>
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
                {/* <PieChartCard /> */}
            {/* <ChartWrapperStyle dir="ltr"> */}
              <ReactApexChart key={Math.random()} type="donut" series={CHART_DATA} options={chartOptions} height={240} />
            {/* </ChartWrapperStyle> */}
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
          
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={7.5}>
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
            </Grid>

             <Grid item xs={8} md={6} lg={4.5}>
             {/* <Grid item xs={12} md={8} lg={6}> */}
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 540,
                  border: '1px solid black'
                }}
              >
                <RecentTransaction />
              </Paper>
            </Grid>
          </Grid>
      </Container>
    </>
  );
}
