import React from 'react';
import styled from 'styled-components';

// Global Components
import { CategoryIcon } from './CategoryIcon';

// Data
import { CategoryIconDetail } from "../../../../data/CategoryIconDetail";

const Category: React.FC = () => {
    return(
        <Container>
            {CategoryIconDetail.map((elem, key) => {
                return <CategoryIcon {...elem} />
            })}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 16px 0px;
    gap: 2rem;
    margin: 0 auto;

    ::after{
        inset-inline: 0;
        transition: opacity 0.2s ease;
    }
`;

export default Category;