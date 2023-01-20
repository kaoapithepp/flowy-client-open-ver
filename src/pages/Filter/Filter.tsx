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
            <FilterCard />
            <SpecificityCard />
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
    max-width: 600px;
    min-width: 300px;
    height: 100%;
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

export default Filter;