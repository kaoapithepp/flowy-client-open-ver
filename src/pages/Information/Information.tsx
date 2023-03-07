import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

// Global Components
import { ButtonBack } from '../../components/button/ButtonBack';

//section
import FigureSection from './FigureSection';
import FooterInformation from './FooterInformation';

//MUIs
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import { FLOWY_API_ROUTE } from '../../config/api.config';
import { IconExploreCard } from '../../components/icon/IconExploreCard';
import { IconHighlightCardDetail } from '../../components/data/IconHighlightCardDetail';
import { IconHighlightCard } from '../../components/icon/IconHighlightCard';


const Information: React.FC = () => {
    const [placeInfo, setPlaceInfo] = useState<any>({});

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const isThereToken = localStorage.getItem('flowyToken')
            ? JSON.parse(localStorage.getItem('flowyToken') as string)
            : null;
        if (isThereToken) {
            try {
                axios.get(`${FLOWY_API_ROUTE}/place/${id}`, {
                    headers: {
                        Authorization: `Bearer ${isThereToken}`
                    }
                })
                .then(res => {
                    setPlaceInfo((res as any).data);
                })

            } catch (err: any) {
                alert(err.message);
            }
        }
    },[]);

    function buttonBackClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/explore", { replace: false });
    }

    return(
        <Section>
            <ButtonBack onClick={buttonBackClick}><ArrowBackRoundedIcon /></ButtonBack>
            <FigureSection />
            <DetailSection>
                <h2>{placeInfo.place_name}</h2>
                <h3>{placeInfo.description}</h3>
                <h4>{placeInfo.open_hr?.substring(0,5)} - {placeInfo.close_hr?.substring(0,5)}</h4>
                <div className="price-and-spec">
                    <p className="price-tag">{placeInfo.unit_price} บาท / ชั่วโมง</p>
                    <div className="icon-card">
                        { !placeInfo.spec?.isSmokable &&
                            <IconExploreCard
                                icon="SmokeFreeRoundedIcon"
                                label="งดสูบบุหรี่" />
                        }
                        { placeInfo.spec?.isQuiet &&
                            <IconExploreCard
                                icon="VolumeOffRoundedIcon"
                                label="งดใช้เสียงดัง" />
                        }
                    </div>
                </div>
            </DetailSection>
            <HighlightSection>
                <h3>สิ่งอำนวยความสะดวกที่มีให้</h3>
                <div className="amenities">
                    {IconHighlightCardDetail.map((elem, key) => {
                        return <IconHighlightCard {...elem} />
                    })}
                </div>
            </HighlightSection>
            <div className='position-footer'>
                <FooterInformation />
            </div>
        </Section>
    );
}

const Section = styled.div`
    padding: 0px;
    max-height: 120vh;
    max-width: 1024px;
    min-width: 300px;
    margin: 0 auto;
    
    ::before{
        display: flex;
        content: '';
    }

    ::after{
        display: flex;
        content: '';
        padding-bottom: 69px;
    }

    .position-footer{
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        margin: 0 auto;
    }
`;

const DetailSection = styled.div`
    padding: 16px;

    h3 {
        color: var(--grey-600);
        font-size: 16px;
    }

    h4{
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

const HighlightSection = styled.div`
    padding: 16px;

    .amenities{
        color: var(--grey-800);
        margin-top: 12px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        align-content: center;
        justify-items: start;
    }
`;

export default Information;

