import React from 'react';
import styled from 'styled-components';

// Global Components
import { IconExploreCard } from "../../components/icon/IconExploreCard";

// Data
import { IconExploreCardDetail } from "../../components/data/IconExploreCardDetail";

const DetailSection: React.FC = () => {
    return(
        <Container>
            <h2>บ้านแม่เถาสเปซ</h2>
            <h3>ซอยวัดอุโมงค์ เชียงใหม่ ประเทศไทย</h3>
            <h4>08:00 - 20:00</h4>
            <p>60 บาท/ชั่วโมง</p>
            <div className="icon-card">
                {IconExploreCardDetail.map((elem, key) => {
                return <IconExploreCard {...elem} />
                })}
            </div>
        </Container>
    );
}

const Container = styled.div`
    padding: 16px;
    border-bottom: 1px solid #E0E0E0;

    h3{
        color: var(--gray-600);
    }

    .icon-card {
        display: flex;
        gap: 2rem;
    }
`;

export default DetailSection;

