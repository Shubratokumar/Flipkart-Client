import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import { Box, styled } from '@mui/material';



const Container = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
`
const Home = () => {
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