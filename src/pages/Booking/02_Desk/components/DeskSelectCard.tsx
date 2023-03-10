import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

// Global Components
import { Button } from '../../../../components/button/Button';
import { useBookEntityValue } from '../../../../context/BookEntityProvider';

export const DeskSelectCard: React.FC<any>= (elem, key) => {
    const { bookingEntity, setBookingEntity } = useBookEntityValue();
    const navigate = useNavigate();

    function seatSelectClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        setBookingEntity({...bookingEntity, ['desk_id']: elem.desk_id});
        
        navigate(`/book-time-slot/${elem.desk_id}`, { replace: false });
    }
    
    return (
        <Card key={key}>
            <div className='detail'>
                <div className="desk-info">
                    <h3>{elem.desk_name}</h3>
                    <p>{elem.description}</p>
                    <div className="tags">
                        <p className={elem.isHotDesk ? 'hotdesk' : 'not-hotdesk'}>
                            {
                                elem.isHotDesk ? "hot desk" : "reserve"
                            }
                        </p>
                        <p className="seat-suggest">เหมาะสำหรับ {elem.min_seat} - {elem.max_seat} คน</p>
                    </div>
                </div>
            </div>
            <img src={elem.image?.[0]} alt="" />
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
    width: 100%;
    height: 100%;
    color: var(--black);
    background-color: var(--white);
    box-shadow: var(--shadow);
    font-family: var(--brand-font);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;

    cursor: default;
    
    p {
        color: var(--grey-600);
        font-size: 14px;
    }
    
    img {
        border-radius: 4px;
        justify-content: center;
        aspect-ratio: 3 / 2;
        object-fit: cover;
        height: 100%;
        width: 100%;
        /* margin-top: 12px; */
    }

    .detail{
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        text-align: left;
        gap: 2em;
        /* height: 160px; */
    }

    .desk-info {
        display: flex; 
        flex-direction: column;
        justify-content: flex-start;
    }

    .button-size{
        width: 15em;
        margin: -8px auto;
    }

    .tags {
        display: flex;
        gap: .5em;
    }

    .hotdesk,
    .not-hotdesk,
    .seat-suggest {
        margin: 0;
        padding: 6px;
        width: fit-content;
        border-radius: 0.3rem;
        color: var(--grey-900);
        font-size: 10px;
    }

    .hotdesk {
        background-color: var(--purple-notion);
    }
    
    .not-hotdesk {
        background-color: var(--pink-notion);
    }

    .seat-suggest {
        background-color: var(--yellow-notion);
    }
`;