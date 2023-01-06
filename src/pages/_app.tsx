import { AppProps } from 'next/app';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

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
    font-family: 'Open Sans', sans-serif;
  }
  a {
        color: ${theme.colors.primary};
        text-decoration: none;
        font-weight: 700;
    }

    a.button {
        padding: .7rem 1.2rem;
        border-radius: 10px;
        transition: 0.4s;
    }

    a.icon {
        background: ${theme.colors.blueLight};
             
        display: flex;
        align-items: center;
        gap: 7px;        

        &:hover{
            background: ${theme.colors.blueSuperLight};             
        }
    }

    a.nav {
        &:hover {
            color: ${theme.colors.blueSuperLight};
        }
    }

    .portifolio {
        background: ${theme.colors.blueLight};
    }
`;



export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}