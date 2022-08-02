import React, { useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { addToCart } from './../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

const LeftContainer = styled(Box)(({ theme })=>({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')] : {
        padding: '20px 40px'
    }
}));
const Image = styled("img")({  
     width: '95%',  
    padding: '8px',    
});
const StyledButton = styled(Button)(({ theme })=> ({
    width: '48%',
    height: 50,
    borderRadius: 2,
    [theme.breakpoints.down('lg')] : {
        width: '46%'
    },
    [theme.breakpoints.down('sm')] : {
        width: '48%'
    }
}));


const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ quantity, setQuantity ] = useState(1);
    const { id } = product;

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }
    return (
        <LeftContainer>
            <Box  style={{ padding: '15px 20px', border: '1px solid #f0f0f0' }}>
                <Image src={product.detailUrl} alt="product-detail" />
            </Box>
            <StyledButton onClick={() => addItemToCart()} variant="contained" style={{ marginRight: 12, background: '#ff9f00' }}>
               <Cart/> Add to Cart
            </StyledButton>
            <StyledButton variant="contained" style={{ background: '#fb541b'}} >
               <Flash/> Buy Now
            </StyledButton>
        </LeftContainer>
    );
};

export default ActionItem;