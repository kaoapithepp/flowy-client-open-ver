import React from 'react';
import styled from 'styled-components';

const Figure: React.FC = () => {
    return(
        <Container>
            <ImgSection1>
                <img src='https://images.unsplash.com/photo-1562664348-2188b99b5157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt="" />
            </ImgSection1>
            <ImgSection2>
                <img src='https://images.unsplash.com/photo-1562664348-2188b99b5157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt="" />
                <img src='https://images.unsplash.com/photo-1562664348-2188b99b5157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt="" />
                <img src='https://images.unsplash.com/photo-1562664348-2188b99b5157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt="" />
            </ImgSection2>
        </Container>
    );
}

const Container = styled.div`
    padding: 0px;
`;


const ImgSection1 = styled.div`
    img{
        justify-content: center;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
`;

const ImgSection2 = styled.div`
    display: flex;
    gap: 8px;

    img{
        display: flex;
        overflow-x: hidden;
        justify-content: center;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        height: 50%;
        width: 50%;
    }
`;

export default Figure;

