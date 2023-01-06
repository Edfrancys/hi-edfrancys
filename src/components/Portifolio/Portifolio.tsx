import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { Container, Content, Row } from '../Styles';
import imgDev from '../../../public/dev-image.jpg';

const NavBar = styled.nav`
    width: 100%;
    min-height: 60px;
    background-color: ${({theme}) => theme.colors.blueLight};

    padding: 0 2rem;
    
    @media (max-width: 768px) {       
    }
    @media (max-width: 576px) {    
        padding: 0 1.5rem;    
    }
`;
const NavBarContent = styled.nav`
    width: 100%;
    min-height: 60px;
    padding: 1rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 576px) {      
        flex-direction: column;

        div {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        * + div {
            justify-content: space-between;
        }
    }

    a {
        color: ${({theme}) => theme.colors.primary};
        text-decoration: none;
        font-weight: 700;
    }

    a.button {
        padding: .7rem 1.2rem;
        border-radius: 10px;
        transition: 0.4s;
    }

    a.icon {
        background: ${({theme}) => theme.colors.blueLight};
             
        display: flex;
        align-items: center;
        gap: 7px;        

        &:hover{
            background: ${({theme}) => theme.colors.blueSuperLight};             
        }
    }

    a.nav {
        &:hover {
            color: ${({theme})=> theme.colors.blueSuperLight};
        }
    }
    
    @media (max-width: 768px) {       
    }
    @media (max-width: 576px) {        
    }
`;

const Cell = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 100%;

    .image{
        width: 60%;
    }

    @media (max-width: 576px) {
        width: 100%;
        .gaps {
            flex-direction: column;
        }
    }

    .gaps {
        gap: 1rem;
        justify-content: space-evenly;
    }
    @media (max-width: 800px) { 
        .gaps {            
            justify-content: space-evenly;
            font-size: 0.7rem;
        }
    }
`;

const TitlePrimary = styled.h1`
    color: ${({theme}) => theme.colors.primary};
    font-size: 2.8rem;    
    @media (max-width: 576px) {
        font-size: 2.2rem;  
    }
`;

const SubTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({theme}) => theme.colors.blueSuperLight};
`;

export const Portifolio: React.FC = () => {
    return (
        <Container id='Portifolio' className='portifolio'>
            <Content>

                <Row>
                    <Cell>
                        <TitlePrimary>Portifólio</TitlePrimary>
                        <SubTitle>Aqui estão alguns de meus trabalhos que selecionei para mostrar a vocês, as ideias e soluções criadas.</SubTitle>
                        <Row className='gaps'>
                            <Cell>
                                <Image 
                                    alt='Dev Image'
                                    src={imgDev}
                                    layout='responsive'
                                    width={515}
                                    height={343}
                                />  
                                <SubTitle style={{marginTop: 20, color: '#fff'}}>
                                    WebSite - Corrida Para Luz
                                </SubTitle>
                            </Cell>
                            <Cell>
                                <Image 
                                    alt='Dev Image'
                                    src={imgDev}
                                    layout='responsive'
                                    width={515}
                                    height={343}
                                />  
                                <SubTitle style={{marginTop: 20, color: '#fff'}}>
                                    WebSite - Corrida Para Luz
                                </SubTitle>
                            </Cell>
                        </Row>
                    
                    </Cell>                
                </Row>            
            </Content>
        </Container>
    );
};