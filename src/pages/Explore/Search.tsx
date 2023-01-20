import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Global Components
import { ButtonSearch } from '../../components/button/ButtonSearch';
import { ButtonFilter } from '../../components/button/ButtonFilter';
import { ButtonAccount } from '../../components/button/ButtonAccount';
// import { LoginRegCard } from '../../components/card/LoginRegCard'
import { AccountCard } from '../../components/card/AccountCard';

//MUIs
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

const Search: React.FC = () => {

    const navigate = useNavigate();

    function buttonFilterClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        navigate("/filter", { replace: false });
    }
    
    // const [openLoginRegCard, setLoginRegCard] = useState<Boolean>(false);

    // const handleLoginRegCard = (state: Boolean) => {
    //     setLoginRegCard(state);
    // }

    // let render_LoginRegCard = null
    // openLoginRegCard? (
    //     render_LoginRegCard = <LoginRegCard />
    // ):(render_LoginRegCard = null)

    const [openAccountCard, setAccountCard] = useState<Boolean>(false);

    const handleAccountCard = (state: Boolean) => {
        setAccountCard(state);
    }

    let render_AccountCard = null
    openAccountCard? (
        render_AccountCard = <AccountCard />
    ):(render_AccountCard = null)

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
            <ButtonAccount onClick={() => handleAccountCard(!openAccountCard)}>
                <Icon><PersonOutlineRoundedIcon /></Icon>          
            </ButtonAccount>
            {render_AccountCard}
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    max-width: 600px;
    margin: 0 auto;

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
`;

export default Search;