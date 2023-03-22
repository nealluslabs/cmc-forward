import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Chip, Typography, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { signup, uploadImage } from 'src/redux/actions/auth.action';

import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, CssBaseline, TextField, Grid, Button} from '@mui/material';


const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));


export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [employeer, setEmployeer] = useState('');
  const [password, setPassword] = useState('');
  const [selectedFile, setSelectedFile] = useState({selectedFile: [], selectedFileName: []});
  const [file, setFile] = useState();


  const handleselectedFile = event => {
    setSelectedFile({
        selectedFile: event.target.files[0],
        selectedFileName: event.target.files[0].name
    });
    setFile(URL.createObjectURL(event.target.files[0]));
};
  

  const userSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    const user = {fname, lname, email, employeer, password};
     console.log("USER: ", user);
    dispatch(signup(user, navigate, setLoading)); 
  }




  const header = {
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '29px',
    lineHeight: '30.4px',
    color: 'black',
    marginLeft: '5%'
  };

  const mystyle = {
      fontFamily: 'Arial',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '21px',
      lineHeight: '24.8px',
      color: 'black'
    };

  return (
    <>
      <Helmet>
        <title> Register | Cooler Web </title>
      </Helmet>

      <StyledRoot>
      <Container component="main" maxWidth="lg" style={{border: '0px solid red' }}>
        <div style={{marginLeft: '20%'}}>
        <CssBaseline /><br/><br/>
        <div style={{marginLeft: '10%'}}>
        <p style={header}>EMPLOYEE REGISTRATION</p>
        </div>
        <Box
          sx={{
            marginTop: 8,
            marginLeft: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "center",
            border: "0px solid green",
          }}
        >
          <Box>
          <form component="form" onSubmit={userSignup} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={10} sm={3.5} sx={{mt: -1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>FIRST NAME:</p>
              </Grid>
              <Grid item xs={12} sm={8} style={{border: '0px solid red'}}>
                <TextField
                  variant="standard"
                  style={{border: '1px solid black', width: 380, height: 45,  padding: 2}}
                  required
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={fname}    
                  onChange={(e) => setFName(e.target.value)}
                />
              </Grid>
              <Grid item xs={10} sm={3.5} sx={{mt: -1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>LAST NAME:</p>
              </Grid>
              <Grid item xs={12} sm={8} style={{border: '0px solid red'}}>
                <TextField
                  variant="standard"
                  style={{border: '1px solid black', width: 380, height: 45,  padding: 2}}
                  required
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={lname}    
                  onChange={(e) => setLName(e.target.value)}
                />
              </Grid>
              <Grid item xs={10} sm={3.5} sx={{mt: -1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>EMAIL:</p>
              </Grid>
              <Grid item xs={12} sm={8} style={{border: '0px solid red'}}>
                <TextField
                  variant="standard"
                  type="email"
                  style={{border: '1px solid black', width: 380, height: 45,  padding: 2}}
                  required
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={email}    
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={10} sm={3.5} sx={{mt: -1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>EMPLOYEER:</p>
              </Grid>
              <Grid item xs={12} sm={8} style={{border: '0px solid red'}}>
                <TextField
                  variant="standard"
                  type="number"
                  style={{border: '1px solid black', width: 380, height: 45,  padding: 2}}
                  required
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={employeer}    
                  onChange={(e) => setEmployeer(e.target.value)}
                />
              </Grid>
              <Grid item xs={10} sm={3.5} sx={{mt: -1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>PASSWORD:</p>
              </Grid>
              <Grid item xs={12} sm={8} style={{border: '0px solid red'}}>
                <TextField
                  variant="standard"
                  type="password"
                  style={{border: '1px solid black', width: 380, height: 45,  padding: 2}}
                  required
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                  }}
                  value={password}    
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
        
{/*               
              <Grid item xs={10} sm={2.5} sx={{mt: 1}} style={{border: '0px solid red'}}>
                <p style={mystyle}>LOGO:</p>
              </Grid>
              <Grid item xs={12} sm={6} style={{border: '0px solid red'}}>
              <center>
              <Button
              // fullWidth
              variant="contained"
              component="label"
              style={{backgroundColor: 'black', height:"40px", width: '40%',  fontSize:"15px"}}
            //   sx={{ mt: 3, mb: 2 }}
            >
              UPLOAD
              <input
              type="file"
              style={{ display: 'none' }}
              // hidden
              required
              onChange={handleselectedFile}
              />
            </Button>
            <p>{selectedFile?.selectedFileName}</p>

              </center>
              </Grid> */}

            </Grid>
            <Divider style={{color: 'black'}}>
              <Chip label="......" />
            </Divider>
            <center>
            <Grid item xs={10} sm={2.5} sx={{mr: 5}} style={{border: '0px solid red'}}>
             <Button
              type="submit"
              disabled={loading}
              // fullWidth
              variant="contained"
              style={{backgroundColor: '#348AED', color: 'white', height:"50px",   fontSize:"15px"}}
              sx={{ mt: 3, mb: 2 }}
              // onClick={() => {
                
              // }}
            >
              {loading ? "Loading..." : "SUBMIT"}
            </Button>
            </Grid>
            </center>
            </form>
          </Box>
        </Box>
        </div>
      </Container>
      </StyledRoot>
    </>
  );
}
