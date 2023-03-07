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
        --purple-notion: #E1D2F8;
        --pink-notion: #FBD3E9;
        --green-notion: #CDE7E2;
        --form-grey: #B6B6B6; // Form placeholder, border
        --error: #FE0044; // Error red
        --grey-200: #EEEEEE;
        --grey-300: #E0E0E0;
        --grey-400: #BDBDBD; 
        --grey-600: #757575;
        --grey-800: #424242;
        --grey-900: #333333;

        --shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

        --brand-font: "IBM Plex Sans Thai", sans-serif;
    }
`;