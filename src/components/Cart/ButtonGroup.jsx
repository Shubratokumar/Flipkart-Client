import React from 'react';
import { Box, Button, styled } from '@mui/material';


const Component = styled(Box)`
    margin-top: 30px;
`;

const ButtonGroup = () => {
    return (
        <Component>
            <Button>-</Button>
            <Button>1</Button>
            <Button>+</Button>
        </Component>
    );
};

export default ButtonGroup;