import React from 'react';
import styled from 'styled-components';

// Global Components
import { ExploreCard } from '../../components/card/ExploreCard';
import { LoginRegCard } from '../../components/card/LoginRegCard'
import { AccountCard } from '../../components/card/AccountCard';

//section
import Search from './Search'
import Category from './category';

const Explore: React.FC = () => {
    return(
        <Section>
            <Search />
            <Category />
            <ExploreCard />
            {/* <AccountCard /> */}
        </Section>
    );
}

const Section = styled.div`
    padding: 16px;
    min-width: 300px;
`;

export default Explore;