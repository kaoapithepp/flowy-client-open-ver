import React from 'react';
import styled from 'styled-components';

interface FigureContext {
    image: string[];
}

const Figure: React.FC<FigureContext> = ({ image }) => {
    return(
        <Container>
            <ImgSection1>
                <img src={image?.[0]} alt="" />
            </ImgSection1>
            <ImgSection2>
                {
                    image?.slice(1).map((imgUri, key) => {
                        return <img src={imgUri} alt="" key={key} />
                    })
                }
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
        max-height: 500px;
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
        /* max-height: 300px; */
    }

    @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape) {
        display: grid;
        grid-template-columns: 1fr 1fr;

        img{
            border-radius: 8px;
            /* height: fit-content; */
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

