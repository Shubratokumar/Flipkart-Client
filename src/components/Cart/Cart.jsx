import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Box, Typography, Button, styled } from '@mui/material';
import CartItem from './CartItem';
import TotaLView from './TotaLView';
import EmptyCart from './EmptyCart';

const Container = styled(Grid)`
    padding: 30px 135px;
`;
const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;
const ButtonWrap = styled(Box)`
    padding: 16px 20px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;
const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    width: 250px;
    height: 51px;
    border-radius: 2px;
`;

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);
    return (
        <>
            {
                cartItems.length ? 
                    <Container container>
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>My Cart ({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item} key={item.id} />
                                ))
                            }
                            <ButtonWrap>
                                <StyledButton>Place Order</StyledButton>
                            </ButtonWrap>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotaLView cartItems={cartItems}/>
                        </Grid>
                    </Container>
                : <EmptyCart/>
            }
        </>
    );
};

export default Cart;