import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Global Components
import { Button } from '../button/Button';

// MUIs
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import ReduceCapacityRoundedIcon from '@mui/icons-material/ReduceCapacityRounded';

interface CardData {
    title: string;
    detail: string;
    icon: string;
    img: string;
};

export const IconDeskSelectCard: React.FC<CardData>= (elem: CardData) => {

    function renderSwitchCase(action: CardData){
        switch(action.icon){
            case 'PersonRoundedIcon':
                return <PersonRoundedIcon className='large-icon' />;
            case 'PeopleAltRoundedIcon':
                return <PeopleAltRoundedIcon className='large-icon' />;
            case 'Groups2RoundedIcon':
                return <Groups2RoundedIcon className='large-icon' />;
            case 'ReduceCapacityRoundedIcon':
                return <ReduceCapacityRoundedIcon className='large-icon' />;
            default:
                return;
        }
    }

    const navigate = useNavigate();

    function seatSelectClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/booking-time-slot", { replace: false });
    }
    
    return (
        <Card>
            <div className='detail'>
                <div>
                    <h3>{elem.title}</h3>
                    <p>{elem.detail}</p>
                </div>
                <IconBox>
                    {renderSwitchCase(elem)}
                </IconBox>
            </div>
            <img src={elem.img} alt="" />
            <div className='button-size'>
                <Button onClick={seatSelectClick}>เลือก</Button>
            </div>
        </Card>
    );
}

const Card = styled.div`
    padding: 16px 16px 8px 16px;
    margin-bottom: 8px;
    border: 1px solid var(--grey-200);
    border-radius: 16px;
    width: fit-content;
    height: max-content;
    color: var(--black);
    background-color: var(--white);
    box-shadow: var(--shadow);
    font-family: var(--brand-font);

    cursor: default;
    
    p{
        color: var(--grey-600);
    }
    
    img{
        border-radius: 4px;
        justify-content: center;
        aspect-ratio: 3 / 2;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

    .detail{
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        text-align: left;
        gap: 2em;
        height: 100px;
    }

    .button-size{
        width: 15em;
        margin: -8px auto;
    }
`;

const IconBox = styled.div`
    display: flex;
    color: var(--black);
    justify-content: flex-end;
    align-items: center;

    .large-icon {
        transform: scale(150%);
    }
`;