import React from 'react';
import type { AppProps } from 'next/app';
import '../style.css';

import { createGlobalStyle, ThemeProvider} from 'styled-components';

const theme = {    
    colors: {
        primary: '#110777',
        redLight: '#F97D74',     
        blueLight: '#91b3fa',
        blueSuperLight: '#e2e9fb',
    }
};

const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: ubuntu, 'Poppins' ,sans-serif;
    }
    
    h1, h2, h3,h4{
        font-weight: 900;
        color: ${theme.colors.primary}
    }

    *+h2{
        margin-bottom: 1rem;
        color: ${theme.colors.redLight}
    }

    *+p{
        margin-bottom: 1rem;
        color: ${theme.colors.primary}
    }

    a.button {
        background: ${theme.colors.blueLight};
        color: ${theme.colors.primary};
        text-decoration: none ;

        padding: 7px 15px;
        border-radius: 10px;
        
        display: flex;
        align-items: center;
        gap: 7px;

        transition: .2s;
    }

    a.button:hover {
        background: ${theme.colors.blueSuperLight};
        color: ${theme.colors.primary};        
    }

    a.navButton {        
        color: ${theme.colors.primary};
        text-decoration: none ;

        margin: 0 8px;
        padding: 7px 15px;            
        transition: .5s;
    }
    a.navButton:hover {        
        color: ${theme.colors.blueSuperLight};        
    }

    a {
        color: ${theme.colors.redLight};
        text-decoration: none;
        font-weight: 900;
    }
`;



function MyApp ({Component, pageProps}: AppProps) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme} >
                <Component  {...pageProps} />
            </ThemeProvider>       
        </>
        
    );
}

export default MyApp;