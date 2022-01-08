import React from 'react';
import { motion } from 'framer-motion';
import styled  from 'styled-components';

import Title from '../components/Title';

import Image from 'next/image';
import imgDev from '../../public/images/dev-image.jpg';
import Link from 'next/link';

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Row = styled.section`
    width: 90%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImageCell = styled.div`
    width: 60%;
`;

const Cell = styled.div`
    width: 40%;
`;

const SubTitle = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    font-style: italic;
    color: ${props => props.theme.colors.redLight}
`;

const TitlePrimary = styled.h1`
    font-size: 2.8rem;
`;

const HomePage = () => {
    return <>
        <Container>
            <Row>
                <Cell>
                    <TitlePrimary >Edfrancys Azevedo</TitlePrimary>
                    <SubTitle>Developer Front End</SubTitle>
                    <p>
                        Meu nome é Edfrancys Azevedo. Sou desenvolverdor web desde 2015,
                         sou apaixonado por tecnologia, programação e desafios é o que 
                         me define.
                    </p>
                    <p> 
                        Já trabalhei em projetos como <Link href="http://corridaparaluz.com.br/" >CorridaParaLuz</Link>, <Link href='https://painel.mestradomercosul.com.br/>MestradoMercosul</Link> entre outros. 
                    </p>
                </Cell>
                <ImageCell>                    
                    <Image 
                        alt='Dev Image'
                        src={imgDev}
                        layout='responsive'
                        width={515}
                        height={343}
                    />
                </ImageCell>               

            </Row>
        </Container>
        
    </>;
};

export default HomePage;