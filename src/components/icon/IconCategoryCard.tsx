import React from 'react';

// MUIs
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';
import LocalCafeRoundedIcon from '@mui/icons-material/LocalCafeRounded';

import styled from 'styled-components';

interface CardData {
    detail: string;
    icon: string;
};

export const IconCategoryCard: React.FC<CardData>= (elem: CardData) => {

    function renderSwitchCase(action: CardData){
        switch(action.icon){
            case 'HouseRoundedIcon':
                return <HouseRoundedIcon className="large-icon" />;
            case 'HotelRoundedIcon':
                return <HotelRoundedIcon className="large-icon" />;
            case 'LocalCafeRoundedIcon':
                return <LocalCafeRoundedIcon className="large-icon" />;
            default:
                return;
        }
    }
    
    return (
        <Card>
            <Icon>
                {renderSwitchCase(elem)}
            </Icon>
                <p>
                    {elem.detail}
                </p>
        </Card>
    );
}

const Card = styled.button`
    background-color: var(--white);
    color: var(--black);
    border: 1px solid var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: var(--gray-400);
    cursor: pointer;
    font-family: var(--brand-font);

    :hover{
        color: var(--gray-800);
    }
`;

const Icon = styled.div`
   width: 16px;
   height: 16px;
   display: flex;
   justify-content: center;
   align-items: center;
   color: var(--gray-400);

   :hover{
        color: var(--gray-800);
   }
   
`;