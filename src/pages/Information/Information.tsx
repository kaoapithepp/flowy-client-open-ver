import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

// Global Components
import { BackButton } from '../../components/button/BackButton';

//section
import FigureSection from './components/FigureSection';
import { BookingFooter } from '../../components/ui/BookingFooter';

// icons
import { SpecsIcon } from '../../components/icon/SpecsIcon';
import { IconAmenityCard } from '../../components/icon/IconAmenityCard';

// data
import { amenitiesLists } from '../../data/AmenitiesListDetail';


const Information: React.FC = () => {
    const [placeInfo, setPlaceInfo] = useState<any>({});

    const { id } = useParams();
    
    useEffect(() => {
        const isThereToken = localStorage.getItem('flowyToken')
            ? JSON.parse(localStorage.getItem('flowyToken') as string)
            : null;
        if (isThereToken) {
            try {
                axios.get(`${import.meta.env.VITE_FLOWY_API_ROUTE}/place/${id}`, {
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

    return(
        <Section>
            <BackButton />
            <FigureSection image={placeInfo.image}/>
            <DetailSection>
                <h2>{placeInfo.place_name}</h2>
                <h3>{placeInfo.description}</h3>
                <h4>{placeInfo.open_hr?.substring(0,5)} - {placeInfo.close_hr?.substring(0,5)}</h4>
                <div className="price-and-spec">
                    <p className="price-tag">{placeInfo.unit_price} บาท / ชั่วโมง</p>
                    <div className="icon-card">
                        { !placeInfo.spec?.isSmokable &&
                            <SpecsIcon
                                icon="SmokeFreeRoundedIcon"
                                label="งดสูบบุหรี่" />
                        }
                        { placeInfo.spec?.isQuiet &&
                            <SpecsIcon
                                icon="VolumeOffRoundedIcon"
                                label="งดใช้เสียงดัง" />
                        }
                    </div>
                </div>
            </DetailSection>
            <AmenitySection>
                <h3>สิ่งอำนวยความสะดวก</h3>
                <div className="amenities">
                    {   
                        amenitiesLists.map((attrib, key) => {
                        return <IconAmenityCard attribute={attrib} data={placeInfo.amenity} />
                    })}
                </div>
            </AmenitySection>
            <div className='position-footer'>
                <BookingFooter nextPath={`/book-ctm-amt/${id}`} buttonText="จอง"/>
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

const AmenitySection = styled.div`
    padding: 16px;

    .amenities{
        color: var(--grey-800);
        margin-top: 12px;
        align-items: center;
        align-content: center;
        justify-items: start;

        @media screen and (min-width: 1180px){
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
`;

export default Information;

