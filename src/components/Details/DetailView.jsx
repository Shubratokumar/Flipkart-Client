import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productActions';
import { Box, styled, Grid } from '@mui/material';
import ActionItem from './ActionItem';
import ProductDetail from './ProductDetail';

const Component = styled(Box)`
    background: #f2f2f2;
    margin-top: 55px;
`;
const Container = styled(Grid)`
    background: #ffffff;
    display: flex;
`;
const RightComponent = styled(Grid)`
    margin-top: 50px;
`;

const DetailView = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { product, loading } = useSelector(state => state.getProductDetails);
    
    useEffect(()=>{
        if(product && id !== product.id){
            dispatch(getProductDetails(id));
        }
    }, [dispatch, id, product, loading ]);

    return (
        <Component>
            {
                product && Object.keys(product).length && 
                    <Container container>
                        <Grid item lg={4} md={4} sm={8} xs={12}>
                            <ActionItem product={product} key={product.id} />
                        </Grid>
                        <RightComponent item lg={8} md={8} sm={8} xs={12} style={{ paddingLeft: "10px" }}>                            
                            <ProductDetail product={product}/>
                        </RightComponent>
                    </Container>
            }
        </Component>
    );
};

export default DetailView;