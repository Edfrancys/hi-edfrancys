import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { Container, Content, Row } from '../Styles';

import imgCorrida from '../../../public/corridaparaluz.png';
import imgKiloja from '../../../public/kiloja.png';
import imgLojaPhotoshop from '../../../public/lojasphotoshop.png';
import imgPainelCia from '../../../public/painel-CIA.png';


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
                                    src={imgCorrida}
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
                                    src={imgLojaPhotoshop}
                                    layout='responsive'
                                    width={515}
                                    height={343}
                                />  
                                <SubTitle style={{marginTop: 20, color: '#fff'}}>
                                    LandingPage - Loja Photoshop
                                </SubTitle>
                            </Cell>
                        </Row>
                        <Row className='gaps'>
                                
                            <Cell>
                                <Image 
                                    alt='Dev Image'
                                    src={imgKiloja}
                                    layout='responsive'
                                    width={515}
                                    height={343}
                                />  
                                <SubTitle style={{marginTop: 20, color: '#fff'}}>
                                    Loja Virtual - Kiloja
                                </SubTitle>
                            </Cell>
                            <Cell>
                                <Image 
                                    alt='Dev Image'
                                    src={imgPainelCia}
                                    layout='responsive'
                                    width={515}
                                    height={343}
                                />  
                                <SubTitle style={{marginTop: 20, color: '#fff'}}>
                                    Painel Administração, Alunos e Professores - Mestrado e Doutorado CIA
                                </SubTitle>
                            </Cell>
                        </Row>
                    
                    </Cell>                
                </Row>            
            </Content>
        </Container>
    );
};