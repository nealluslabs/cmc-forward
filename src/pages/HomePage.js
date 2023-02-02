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


const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(0),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible',
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

// ----------------------------------------------------------------------

const CHART_DATA = [50, 50];

export default function HomePage() {
  const theme = useTheme();

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
    // tooltip: {
    //   fillSeriesColor: false,
    //   y: {
    //     formatter: (seriesName) => fNumber(seriesName),
    //     title: {
    //       formatter: (seriesName) => `${seriesName}`,
    //     },
    //   },
    // },
    plotOptions: {
      pie: {
        donut: {
          size: '90%',
          labels: {
            value: {
              formatter: (val) => fNumber(0),
            },
            total: {
              formatter: (w) => {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return fNumber(0);
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

  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { myGroups, isLoading } = useSelector((state) => state.group);

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
              <ReactApexChart type="donut" series={CHART_DATA} options={chartOptions} height={240} />
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
