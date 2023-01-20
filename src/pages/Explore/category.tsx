import React from 'react';
import styled from 'styled-components';

// Global Components
import { IconCategoryCard } from '../../components/icon/IconCategoryCard';

// Data
import { IconCategoryCardDetail } from "../../components/data/IconCategoryCardDetail";

const Category: React.FC = () => {
    return(
        <Container>
            {IconCategoryCardDetail.map((elem, key) => {
            return <IconCategoryCard {...elem} />
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