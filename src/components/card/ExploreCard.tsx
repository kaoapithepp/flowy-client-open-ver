import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Global Components
import { IconExploreCard } from "../icon/IconExploreCard";
import { ExploreCardDetail } from '../data/ExploreCardDetail';

// Data
import { IconExploreCardDetail } from "../data/IconExploreCardDetail";

interface CardData {
    name_space: string;
    open_time: string;
    close_time: string;
    location: string;
    price: string;
    img: string;
};

export const ExploreCard: React.FC = () => {

    const navigate = useNavigate();

    function exploreCardClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/information", { replace: false });
    }

    return(
        <Warp>
            {
                ExploreCardDetail.map((elem: CardData) => (
                    <Card onClick={exploreCardClick}>
                        <img src={elem.img} alt="" />
                        <Collum>
                            <h2>{elem.name_space}</h2>
                            <h3>{elem.open_time} - {elem.close_time}</h3>
                        </Collum>
                        <h4>{elem.location}</h4>
                        <p>{elem.price} บาท/ชั่วโมง</p>
                            <div className="icon-card">
                                {IconExploreCardDetail.map((elem, key) => {
                                return <IconExploreCard {...elem} />
                                })}
                            </div>
                    </Card>
                ))
            }
        </Warp>
    );
}

const Warp = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    gap: 16px;
`;

const Card = styled.button`
    padding: 16px;
    background: var(--white);
    border: 1px solid var(--grey-200);
    border-radius: 16px;
    transition: 1s;
    font-family: var(--brand-font);
    text-align: left;
    
    :hover {
        box-shadow: 0px 0px 20px 0px var(--grey-200);
    }
    
    img{
        aspect-ratio: 1 / 1;
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 8px;
        margin-bottom: 8px;
    }

    h2{
        font-size: 20px;
        color: var(--black);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    h3{
        font-size: 18.72px;
        color: var(--black);
    }

    h4{
        color: var(--grey-600);
        font-size: 16px;
    }

    p{
        font-size: 16px;
        color: var(--black);
    }

    .icon-card {
        display: flex;
        gap: 2rem;
        color: var(--black);
    }
`;

const Collum = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 1em;
`;