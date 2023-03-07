import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// Global Components
import { ButtonSearch } from '../../components/button/ButtonSearch';
import { ButtonFilter } from '../../components/button/ButtonFilter';
import { ButtonAccount } from '../../components/button/ButtonAccount';
// import { LoginRegCard } from '../../components/card/LoginRegCard'
import { AccountCard } from '../../components/card/AccountCard';

//MUIs
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { FLOWY_API_ROUTE } from '../../config/api.config';

const Search: React.FC = () => {
    const [profile, setProfile] = useState<any>({});
    const [openAccountCard, setAccountCard] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const isThereToken = localStorage.getItem('flowyToken')
            ? JSON.parse(localStorage.getItem('flowyToken') as string)
            : null;
        if (isThereToken) {
            try {
                axios.get(`${FLOWY_API_ROUTE}/user/`, {
                    headers: {
                        Authorization: `Bearer ${isThereToken}`
                    }
                })
                .then(res => {
                    // console.log(res.data.profile_imgUrl);
                    setProfile((res as any).data);
                })

            } catch (err: any) {
                alert(err.message);
            }
        }
    },[]);

    function buttonFilterClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/filter", { replace: false });
    }

    return(
        <Container>
            <ButtonSearch onClick={buttonFilterClick}>
                <div className='flex-display'>
                    <div className='flex-display'>
                        <Icon><SearchRoundedIcon /></Icon>
                        สเปซไหนดี?
                    </div>
                    <ButtonFilter />
                </div>
            </ButtonSearch>
            <ButtonAccount bgImg={(profile as any).profile_imgUrl} onClick={() => setAccountCard(true)} />
            { openAccountCard ? <AccountCard profile={profile} accCardCallback={(e) => setAccountCard(e)} /> : null}
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    max-width: 600px;
    margin: 0 auto;
    position: sticky;
    top: 0;
    left: 0;
    padding: 16px 8px;
    background-color: white;

    .flex-display{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 8px;
        margin-right: 8px;
        gap: 8px;
    }
`;

const Icon = styled.div`
   width: 24px;
   height: 24px;
   display: flex;
   justify-content: center;
   align-items: center;

   img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
   }
`;

export default Search;