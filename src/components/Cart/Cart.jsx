import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Box, Typography } from '@mui/material';
import CartItem from './CartItem';
import TotaLView from './TotaLView';

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);
    return (
        <>
            {
                cartItems.length ? 
                    <Grid container>
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <Box>
                                <Typography>My Cart ({cartItems.length})</Typography>
                            </Box>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item} key={item.id} />
                                ))
                            }
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotaLView />
                        </Grid>
                    </Grid>
                : <div>Empty</div>
            }
        </>
    );
};

export default Cart;