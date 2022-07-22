import React from 'react';
import { InputBase , Box, styled} from '@mui/material';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
`;

const InputSerchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
`

const Search = () => {
    return (
        <SearchContainer>
            <InputSerchBase 
                placeholder="Search for products, brands and more"
            />
        </SearchContainer>
    );
};

export default Search;