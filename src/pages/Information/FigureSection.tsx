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
                <img src='https://images.unsplash.com/photo-1562664348-2188b99b5157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt="" />
            </ImgSection2>
        </Container>
    );
}

const Container = styled.div`
    padding: 8px;

    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;


const ImgSection1 = styled.div`
    display: flex;
    margin-bottom: 8px;

    img{
        border-radius: 4px;
        justify-content: center;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape) {
        display: flex;
        margin-right: 8px;

        img{
            border-radius: 8px;
            aspect-ratio: 1 / 1;
        }
    }

    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait) {
        display: flex;
        margin-bottom: 8px;
        
        img{
            border-radius: 8px;
            aspect-ratio: 16 / 9;
        }
    }

    @media only screen and (min-width: 1024px) {
        display: flex;
        margin-right: 8px;

        img{
            border-radius: 12px;
            aspect-ratio: 1 / 1;
        }
    }
`;

const ImgSection2 = styled.div`
    display: flex;
    margin-bottom: 8px;
    gap: 8px;

    img{
        border-radius: 4px;
        overflow: hidden;
        justify-content: center;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape) {
        display: grid;
        grid-template-columns: 1fr 1fr;

        img{
            border-radius: 8px;
            height: fit-content;
            aspect-ratio: 1 / 1;
        }
    }
    
    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait) {
        display: flex;
        margin-bottom: 8px;

        img{
            border-radius: 8px;
            aspect-ratio: 1 / 1;
        }
    }

    @media only screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;

        img{
            border-radius: 12px;
            aspect-ratio: 1 / 1;
        }
    }
`;

export default Figure;

