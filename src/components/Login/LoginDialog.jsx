import React, { useState , useContext} from "react";
import { authenticateSignup, authenticateLogin } from './../../service/api';
import { DataContext } from './../../context/DataProvider';

import {
  Dialog,
  Box,
  TextField,
  Button,
  Typography,
  styled,
} from "@mui/material";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 83%;
  width: 28%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: white;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Box)`
  font-size: 12px;
  color: #878787;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValue = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};
const loginInitialValue = {
  username:"",
  password:"",
}

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValue);
  const [login, setLogin] = useState(loginInitialValue);
  const [error, setError] = useState(false);
  const { setAccount } = useContext(DataContext);

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };
  /* const toggleLogin = () =>{
        toggleAccount(accountInitialValues.login);
    }; */

  const handleClose = () => {
    setOpen(false);
    setError(false);
    toggleAccount(accountInitialValues.login);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };  
  const signupUser = async() =>{
    let response = await authenticateSignup(signup);
    if(!response) return ;
    handleClose();
    setAccount(signup.firstname)
  };
  const onValueChange = (e) => {
    setLogin({...login, [e.target.name]: e.target.value})
  }
  const LoginUser = async() =>{
    let response = await authenticateLogin(login);
    if(response.status === 200){
      handleClose();
      setAccount(response.data.data.firstname);
    } else{
      setError(true)
    }
    console.log(response);
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                onChange={(e) => onValueChange(e)}
                name="username"
                label="Enter Username"
                variant="standard"
              />
              {
                error && <Error>Please enter valid username or password</Error>
              }
              <TextField
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
                variant="standard"
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privicy
                Policy.
              </Text>
              <LoginButton onClick={ ()=>LoginUser()} >Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                onChange={(e) => onInputChange(e)}
                name="firstname"
                label="Enter Firstname"
                variant="standard"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Enter Lastname"
                variant="standard"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter Username"
                variant="standard"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
                variant="standard"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
                variant="standard"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="phone"
                label="Enter Phone"
                variant="standard"
              />
              {/* <Text>By continuing, you agree to Flipkart's Terms of Use and Privicy Policy.</Text> */}
              <LoginButton onClick={()=> signupUser()}>Continue</LoginButton>
              {/* <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <RequestOTP onClick={()=> toggleLogin()} >Existing User? Login</RequestOTP> */}
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
