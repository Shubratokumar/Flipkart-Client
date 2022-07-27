import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import { Box, styled } from '@mui/material';
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';

const Container = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
`
const Home = () => {
    const { products } = useSelector(state => state.getProducts);
    console.log(products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    
    return (
        <>
            <NavBar/>
            <Container>
                <Banner/>
                <Slide products={products} title="Deal of the Day"/>
                <Slide products={products}/>
                <Slide products={products}/>
            </Container>
        </>
    );
};

export default Home;