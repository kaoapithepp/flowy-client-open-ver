import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// Components
import { SearchForm } from './SearchForm';
import { FilterButton } from './FilterButton';
import { ProfileAvatar } from './ProfileAvatar';
import { AccountCard } from '../AccountInfo/AccountCard';

//MUIs
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

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
                axios.get(`${import.meta.env.VITE_FLOWY_API_ROUTE}/user/`, {
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
            <SearchForm onClick={buttonFilterClick}>
                <div className='flex-display'>
                    <div className='flex-display'>
                        <Icon><SearchRoundedIcon /></Icon>
                        สเปซไหนดี?
                    </div>
                    <FilterButton />
                </div>
            </SearchForm>
            <ProfileAvatar bgImg={(profile as any).profile_imgUrl} onClick={() => setAccountCard(true)} />
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
    background-color: var(--white);

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