import React from 'react';
import styled from 'styled-components';

// Global Components
import { FilterCard } from '../../components/card/FilterCard';
import { SpecificityCard } from '../../components/card/SpecificityCard';

//Section
import FooterFilter from './FooterFilter';

const Filter: React.FC = () => {
    return(
        <Section>
            <Layout>
                <FilterCard />
                <SpecificityCard />
            </Layout>
            <div className='position-footer'>
                <FooterFilter />
            </div>
        </Section>
    );
}

const Section = styled.div`
    flex: 1 1 auto;
    overflow-y: auto;
    padding: 16px;
    max-width: 1024px;
    margin: 0 auto;
    background-color: var(--white);

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

const Layout = styled.div`
    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    }

    @media only screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    }
`;

export default Filter;