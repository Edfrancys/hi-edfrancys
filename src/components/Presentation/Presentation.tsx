import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import {FaGithub, FaLinkedin, FaMailBulk} from 'react-icons/fa';

import { Container, Content, Row } from '../Styles';

import imgDev from '../../../public/dev-image.jpg';


const Cell = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 50%;

    .image{
        width: 60%;
    }

    @media (max-width: 576px) {
        width: 100%;
        .gaps {
            flex-direction: row;
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
    color: ${({theme}) => theme.colors.redLight};
`;

export const Presentation: React.FC = () => {
    return (
        <Container id='Home'>
            <Content>

                <Row>
                    <Cell>
                        <TitlePrimary>Edfrancys Azevedo</TitlePrimary>
                        <SubTitle>Developer Front End</SubTitle>
                        <p>
                        Meu nome é Edfrancys Azevedo. Sou desenvolverdor web desde 2015,
                         sou apaixonado por tecnologia, programação e desafios é o que 
                         me define.
                        </p>
                        <p> 
                        Já trabalhei em projetos como <Link href='http://corridaparaluz.com.br/' >
                            
                                CorridaParaLuz
                            
                            </Link>, <Link href='https://painel.mestradomercosul.com.br' >
                            
                                MestradoMercosul
                            
                            </Link> entre outros. 
                        </p>
                        <Row className='gaps'>
                            <Link href='https://github.com/Edfrancys' className='button icon'>                
                                <FaGithub />
                            Github                              
                            </Link>   
                            <Link href='https://www.linkedin.com/in/edfrancys-azevedo' className='button icon'>                
                                <FaLinkedin />
                            Linkedin                              
                            </Link>
                            <Link href='mailto:edfrancys.victor@outlook.com' className='button icon'>                
                                <FaMailBulk />
                            Email                              
                            </Link>                                 
                        </Row>
                    </Cell>
                    <Cell className='image'>
                        <Image 
                            alt='Dev Image'
                            src={imgDev}
                            layout='responsive'
                            width={515}
                            height={343}
                        />
                    </Cell>
                </Row>            
            </Content>
        </Container>
    );
};