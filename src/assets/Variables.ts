import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --background-color: #FFFFFF;
        --primary: #DF4646;
        --secondary: #EC9090;
        --pale-red: #FFCDD2;
        --button-color: #DF4646; // Button color
        --disabled: #DE5858; // disabled
        --hover: #A11F1F;

        --white: #FFFFFF;
        --black: #000000; // Everything which is black
        --pale-black: #9e9e9e;
        --form-grey: #B6B6B6; // Form placeholder, border
        --error: #FE0044; // Error red
        --gray-200: #EEEEEE
        --gray-300: #E0E0E0;
        --gray-400: #BDBDBD; 
        --gray-600: #757575;
        --gray-800: #424242;

        --brand-font: "IBM Plex Sans Thai", sans-serif;
    }
`;