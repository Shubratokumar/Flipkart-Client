import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import { Box, styled } from '@mui/material';
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch } from 'react-redux';

const Container = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
`
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    
    return (
        <>
            <NavBar/>
            <Container>
                <Banner/>
            </Container>
        </>
    );
};

export default Home;