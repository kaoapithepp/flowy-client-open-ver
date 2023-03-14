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

export const CategoryIcon: React.FC<CardData>= (elem: CardData) => {

    function renderSwitchCase(action: CardData){
        switch(action.icon){
            case 'HouseRoundedIcon':
                return <HouseRoundedIcon />;
            case 'HotelRoundedIcon':
                return <HotelRoundedIcon />;
            case 'LocalCafeRoundedIcon':
                return <LocalCafeRoundedIcon />;
            default:
                return;
        }
    }
    
    return (
        <Card>
            {/* <p> */}
                {renderSwitchCase(elem)}
                {elem.detail}
            {/* </p> */}
        </Card>
    );
}

const Card = styled.div`
    background-color: var(--white);
    color: var(--black);
    border: 1px solid var(--white);
    transition: .2s;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5em;

    color: var(--grey-400);
    font-family: var(--brand-font);

    :hover{
        color: var(--grey-800);
    }
`;