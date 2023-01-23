import React from 'react';
import styled from 'styled-components';

//MUIs
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

export const ButtonFilter: React.FC = () => {
    return(
        <BG>
            <Icon><FilterListRoundedIcon /></Icon>          
        </BG>
    );
}

const BG = styled.button`
    display: flex;
    background: var(--white);
    border: 1px solid var(--grey-200);
    padding: 6px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
`;

const Icon = styled.div`
   width: 24px;
   height: 24px;
   display: flex;
   justify-content: center;
   align-items: center;
   color: var(--black);
`;