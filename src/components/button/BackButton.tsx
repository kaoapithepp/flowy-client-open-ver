import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


// MUIs
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

export const BackButton = () => {
    const navigate = useNavigate();

    function buttonBackClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
    
        navigate(-1);
    }

    return (
        <Wrapper onClick={buttonBackClick}>
            <ArrowBackRoundedIcon />
        </Wrapper>
    );
}

const Wrapper = styled.button`
    display: flex;
    position: fixed;
    z-index: 2;
    margin: 16px;
    background: var(--white);
    border: none;
    box-shadow: var(--shadow);
    color: var(--black);
    width: 50px;
    height: 50px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    cursor: ${props => props.disabled ? "no-drop": "pointer"};
`;