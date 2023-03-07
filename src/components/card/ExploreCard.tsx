import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Global Components
import { IconExploreCard } from "../icon/IconExploreCard";
import { ExploreCardDetail } from '../data/ExploreCardDetail';

// Data
import { IconExploreCardDetail } from "../data/IconExploreCardDetail";
import { FLOWY_API_ROUTE } from '../../config/api.config';

interface CardData {
    name_space: string;
    open_time: string;
    close_time: string;
    location: string;
    price: string;
    img: string;
};

export const ExploreCard: React.FC = () => {
    const [exploreCardDetail, setExploreCardDetail] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const isThereToken = localStorage.getItem('flowyToken')
            ? JSON.parse(localStorage.getItem('flowyToken') as string)
            : null;
        if (isThereToken) {
            try {
                axios.get(`${FLOWY_API_ROUTE}/place/all`, {
                    headers: {
                        Authorization: `Bearer ${isThereToken}`
                    }
                })
                .then(res => {
                    setExploreCardDetail((res as any).data);
                })

            } catch (err: any) {
                alert(err.message);
            }
        }
    },[]);

    function exploreCardClick(event: React.MouseEvent<HTMLButtonElement>, placeId: string) {
        event.preventDefault();

        navigate(`/info/${placeId}`, { replace: false });
    }

    return(
        <Warp>
            {
                exploreCardDetail.map((elem: any) => (
                    <Card onClick={e => exploreCardClick(e, elem.place_id)}>
                        <img src={elem.image[0]} alt="" />
                        <Column>
                            <h2>{elem.place_name}</h2>
                            <h3>{elem.open_hr.substr(0,5)} - {elem.close_hr.substr(0,5)}</h3>
                        </Column>
                        <h4>{elem.description}</h4>
                        <div className="price-and-spec">
                            <p className="price-tag">{elem.unit_price} บาท / ชั่วโมง</p>
                            <div className="icon-card">
                                { !elem.spec.isSmokable &&
                                    <IconExploreCard
                                        icon="SmokeFreeRoundedIcon"
                                        label="งดสูบบุหรี่" />
                                }
                                { elem.spec.isQuiet &&
                                    <IconExploreCard
                                        icon="VolumeOffRoundedIcon"
                                        label="งดใช้เสียงดัง" />
                                }
                            </div>
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
        font-size: 12px;
        color: var(--black);
    }

    .price-and-spec {
        display: flex;
        justify-content: space-between;
    }

    .price-tag{
        margin: 6px 0;
        background-color: var(--green-notion);
        padding: 6px;
        width: fit-content;
        border-radius: 0.5rem;
        color: var(--grey-900);
    }

    .icon-card {
        display: flex;
        gap: 1rem;
        color: var(--grey-800);
    }
`;

const Column = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 1em;
`;