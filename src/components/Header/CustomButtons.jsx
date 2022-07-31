import React, { useState , useContext } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "./../Login/LoginDialog";
import { DataContext } from './../../context/DataProvider';
import Profile from './Profile';

const Wrapper = styled(Box)(({theme})=>({
  display: 'flex',
  margin: '0 3% 0 auto',
  alignItems: 'center',
  '& > *' : {
    marginRight: 40,
    padding: 7,
    fontSize: 15,
    fontWeight: 600,
    alignItems: 'center'
  },
  [theme.breakpoints.down('md')] : {
    display: 'block'
  }
}))

const Container = styled(Box)(({theme})=>({
  display: 'flex',
  [theme.breakpoints.down('md')] : {
    display: 'block'
  }
}))

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const Text = styled(Typography)`
  font-weight: 600;
  padding-left: 3px;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {
        account ? 
          <Profile account={account} setAccount={setAccount} ></Profile>
      : 
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>

      }
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container>
        <ShoppingCartIcon />
        <Text>Cart</Text>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
