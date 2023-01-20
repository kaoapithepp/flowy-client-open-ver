import React from 'react';
import styled from 'styled-components';

//MUIs
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

export const ButtonFilter: React.FC = () => {
    return(
        <BG>
            <Icon><FilterListRoundedIcon className="large-icon" /></Icon>          
        </BG>
    );
}

const BG = styled.button`
    display: flex;
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
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