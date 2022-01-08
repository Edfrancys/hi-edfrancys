import React from 'react';
import type { AppProps } from 'next/app';
import '../style.css';

import { createGlobalStyle, ThemeProvider} from 'styled-components';

const theme = {    
    colors: {
        primary: '#110777',
        redLight: '#F97D74',        
    }
};

const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Poppins', sans-serif;
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