import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <Container>
            <Link to="/explore">
                <img  src="/logos/flowy-red.png" alt="" />
            </Link>
        </Container>
    );
}


const Container = styled.div`
    padding: 0px;
    margin-bottom: 16px;
    
    img {
        display: block;
        min-width: 150px;
        max-width: 12.5vw;
        margin: 0 auto;
    }  
`;



export default Header;