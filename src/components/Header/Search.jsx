import React from 'react';
import { InputBase , Box, styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const InputSerchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`
const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;
`

const Search = () => {
    return (
        <SearchContainer>
            <InputSerchBase 
                placeholder="Search for products, brands and more"
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SearchContainer>
    );
};

export default Search;