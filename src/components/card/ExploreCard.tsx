import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Global Components
import { SpecsIcon } from "../icon/SpecsIcon";

interface CardContext {
    exploreCardDetail: any;
};

export const ExploreCard: React.FC<CardContext> = ({ exploreCardDetail }) => {
    const navigate = useNavigate();

    function exploreCardClick(event: React.MouseEvent<HTMLButtonElement>, placeId: string) {
        event.preventDefault();
        window.scrollTo(0,0);
        navigate(`/info/${placeId}`, { replace: false });
    }

    return (
        <Container>
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
                                    <SpecsIcon
                                        icon="SmokeFreeRoundedIcon"
                                        label="งดสูบบุหรี่" />
                                }
                                { elem.spec.isQuiet &&
                                    <SpecsIcon
                                        icon="VolumeOffRoundedIcon"
                                        label="งดใช้เสียงดัง" />
                                }
                            </div>
                        </div>
                    </Card>
                ))
            }
        </Container>

    );
}

const Container = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 16px;
    `;

const Card = styled.button`
    padding: 16px;
    background: var(--white);
    border: 1px solid var(--grey-200);
    border-radius: 16px;
    transition: .2s;
    font-family: var(--brand-font);
    text-align: left;
    cursor: pointer;
    
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