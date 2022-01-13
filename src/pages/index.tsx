import React from 'react';
import styled  from 'styled-components';

import Image from 'next/image';
import imgDev from '../../public/images/dev-image.jpg';
import imgCorrida from '../../public/images/corridaparaluz.png';
import imgKiloja from '../../public/images/kiloja.png';
import imgLojaPhotoshop from '../../public/images/lojasphotoshop.png';
import imgPainelCia from '../../public/images/painel-CIA.png';
import Link from 'next/link';

import CellContato from '../components/CellContato';
import Menu from '../components/Menu';
import BoxSkill from '../components/BoxSkill';

const Container = styled.div`
    width: 100%;
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

const RowSection = styled.section`
    width: 100%;
    height: auto;
    margin-top: 25px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FlexItens = styled.div`
    display: flex;
    align-items: center;
`;

const ImageCell = styled.div`
    width: 60%;
`;

const ImagePortifolio = styled.div`
    width: 50%;
    
    span {
        border-radius: 15px;
    }
`;

const Cell = styled.div`
    width: 40%;
`;

const SubTitle = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.colors.redLight};
`;

const TitlePrimary = styled.h1`
    font-size: 2.8rem;
`;

const TitlePrimaryPortifolio = styled(TitlePrimary)`
    margin-bottom: 30px;
`;

const Skills = styled(FlexItens)`    
    margin-top: 45px;
    gap: 25px;
`;

const HomePage = ():JSX.Element => {
    return (
        <>
            <Menu />
            <Container id='Home' >
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
                                <a>
                                CorridaParaLuz
                                </a>
                            </Link>, <Link href='https://painel.mestradomercosul.com.br' >
                                <a>
                                MestradoMercosul
                                </a>
                            </Link> entre outros. 
                        </p>
                        <RowSection>
                            <CellContato name='linkedin' href='https://www.linkedin.com/in/edfrancys-azevedo' />
                            <CellContato name='github' href='https://github.com/Edfrancys' />
                            <CellContato name='email' href='mailto:edfrancys.victor@outlook.com' />
                        </RowSection>
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
            <Container id='Portifolio' style={{
                paddingTop: 70,
                paddingBottom: 50,   
                height: 'auto',
                backgroundColor: '#91b3fa'
            }}>
                <Row>
                    <div>
                        <TitlePrimaryPortifolio>Portifólio</TitlePrimaryPortifolio>
                        <p>
                        Aqui estão alguns de meus trabalhos que selecionei para mostrar a vocês ideias e soluções criadas.
                        </p>
                        <FlexItens style={{gap: 20, marginTop: 50}}>
                            <ImagePortifolio>                    
                                <Image 
                                    alt='Dev Image'
                                    src={imgCorrida}
                                    layout='responsive'
                                    width={1273}
                                    height={668}
                                />
                                <SubTitle style={{marginTop: 20, color: '#fff'}}>
                                    WebSite - Corrida Para Luz
                                </SubTitle>
                            </ImagePortifolio>   
                            <ImagePortifolio>                    
                                <Image 
                                    alt='Dev Image'
                                    src={imgLojaPhotoshop}
                                    layout='responsive'
                                    width={1273}
                                    height={668}
                                />
                                <SubTitle style={{marginTop: 20, color: '#fff'}}>
                                    LandingPage - Loja Photoshop
                                </SubTitle>
                            </ImagePortifolio>  
                        </FlexItens>

                        <FlexItens style={{gap: 20, marginTop: 30, alignItems: 'flex-start'}}>
                            <ImagePortifolio>                    
                                <Image 
                                    alt='Dev Image'
                                    src={imgKiloja}
                                    layout='responsive'
                                    width={1273}
                                    height={668}
                                />
                                <SubTitle style={{marginTop: 20, color: '#fff'}}>
                                    Loja Virtual - Kiloja
                                </SubTitle>
                            </ImagePortifolio>
                            <ImagePortifolio>                    
                                <Image 
                                    alt='Dev Image'
                                    src={imgPainelCia}
                                    layout='responsive'
                                    width={1273}
                                    height={668}
                                />
                                <SubTitle style={{marginTop: 20, color: '#fff'}}>
                                    Painel Administração, Alunos e Professores - Mestrado e Doutorado CIA
                                </SubTitle>
                            </ImagePortifolio> 

                            
                        </FlexItens>

                    </div>
                </Row>
            </Container>
            <Container id='Skill' >
                <Row style={{flexDirection: 'column'}} >
                    <TitlePrimary>Minhas Skills</TitlePrimary>
                    <Skills>
                        <BoxSkill skill='FaHtml5' >HTML 5</BoxSkill>
                        <BoxSkill skill='DiCss3' >CSS 3</BoxSkill>
                        <BoxSkill skill='SiPhp' >PHP</BoxSkill>
                        <BoxSkill skill='SiJavascript' >JavaScript</BoxSkill>
                        <BoxSkill skill='SiTypescript' >TypeScript</BoxSkill>
                        <BoxSkill skill='DiGithubBadge' >Git/GitHub</BoxSkill>
                        
                    </Skills>
                    <Skills>
                        <BoxSkill skill='FaReact' >ReactJs</BoxSkill>
                        <BoxSkill skill='FaReact' >React Native</BoxSkill>
                        <BoxSkill skill='SiNextdotjs' >NextJs</BoxSkill>
                        <BoxSkill skill='DiMysql' >MySql</BoxSkill>
                        <BoxSkill skill='SiDocker' >Docker</BoxSkill>
                    </Skills>
                </Row>
            </Container>
        </>  
    );
};

export default HomePage;