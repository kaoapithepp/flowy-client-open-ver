import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// Components
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

    return(
        <Container>
            <SearchForm>
                <div className='flex-display'>
                    <div className='flex-display'>
                        <SearchRoundedIcon />
                        <input placeholder="น้อนยังเสิร์ชไม่ได้นะคับ :("/>
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

        input {
            outline: none;
            border: none;
            font-family: var(--brand-font);
            font-size: 1em;
            color: var(--grey-900);

            ::placeholder {
                color: var(--grey-400);
            }
        }
    }
`;

export const SearchForm = styled.div`
    background-color: var(--white);
    padding: 5px 0px;
    width: 100%;
    border-radius: 25px;
    border: none;
    box-shadow: var(--shadow);

    text-align: left;
    font-family: var(--brand-font);
    font-size: medium;
    font-weight: 500;
    color: var(--grey-400);
`;

export default Search;