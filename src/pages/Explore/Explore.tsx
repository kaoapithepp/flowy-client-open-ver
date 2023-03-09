import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

// Global Components
import { ExploreCard } from '../../components/card/ExploreCard';
import { ExploreCardDetail } from '../../components/data/ExploreCardDetail';
import { LoginRegCard } from '../../components/card/LoginRegCard'
import { AccountCard } from '../../components/card/AccountCard';

//section
import Search from './Search'
import Category from './category';
import LoadingScreen from '../../components/ui/LoadingScreen';

const Explore: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [exploreCardDetail, setExploreCardDetail] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        // setIsLoading(true);
        const isThereToken = localStorage.getItem('flowyToken')
            ? JSON.parse(localStorage.getItem('flowyToken') as string)
            : null;
        if (isThereToken) {
            try {
                axios.get(`${import.meta.env.VITE_FLOWY_API_ROUTE}/place/all`, {
                    headers: {
                        Authorization: `Bearer ${isThereToken}`
                    }
                })
                .then(res => {
                    setExploreCardDetail((res as any).data);
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 3000);
                });
            } catch (err: any) {
                alert(err.message);
            }
        }
    },[isLoading]);

    return(
        <>
            {
                false ? <LoadingScreen /> :
                <Section>
                    <Search />
                    <Category />
                    <ExploreCard exploreCardDetail={exploreCardDetail}/>
                </Section>
            }
        </>
    );
}

const Section = styled.div`
    padding: 16px;
    min-width: 300px;
`;

export default Explore;