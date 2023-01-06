
import React from 'react';
import styled from 'styled-components';
import { Content } from '../Styles';

import BoxSkill from './BoxSkill';

const Container = styled.section`
    width: 100%;
    padding: 6rem 2rem;
    display: flex;    
    justify-content: center;
    
    
    div.skill{
        display: grid;
        grid-template-columns: repeat(7, 1fr);
    }

    @media (max-width: 1240px) { 
        div.skill{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
        }
     }
     @media (max-width: 910px) { 
        div.skill{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
     }
     @media (max-width: 576px) { 
        div.skill{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
     }

`;

const Row = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex: 1;

    

    @media (max-width: 576px) {    
        flex-direction: column; 
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

    .skill {
        gap: 1rem;       
        justify-content: center;        
    }

    @media (max-width: 800px) { 
        .gaps {            
            justify-content: space-evenly;
            font-size: 0.7rem;
        }
    }
`;

const CellSkill = styled.div`
    padding: 0.5rem;
`;

const TitlePrimary = styled.h1`
    color: ${({theme}) => theme.colors.primary};
    font-size: 2.8rem;    
    margin-bottom: 2.5rem;
    @media (max-width: 576px) {
        font-size: 2.2rem;  
    }
`;

export const Skill: React.FC = () => {
    return (
        <Container id='Skill'>
            <Content>

                <Row>
                    <Cell>
                        <TitlePrimary>Skills</TitlePrimary>
                    </Cell>
                </Row> 
                    
                <div className='skill'>
                    <CellSkill>
                        <BoxSkill skill='FaHtml5' >HTML 5</BoxSkill>
                    </CellSkill>
                    <CellSkill>
                        <BoxSkill skill='DiCss3' >CSS 3</BoxSkill>
                    </CellSkill>
                    <CellSkill>
                        <BoxSkill skill='SiPhp' >PHP</BoxSkill>
                    </CellSkill>
                    <CellSkill>
                        <BoxSkill skill='SiJavascript' >JavaScript</BoxSkill>
                    </CellSkill>
                    <CellSkill>
                        <BoxSkill skill='SiTypescript' >TypeScript</BoxSkill>
                    </CellSkill>
                    <CellSkill>
                        <BoxSkill skill='DiGithubBadge' >Git/GitHub</BoxSkill>
                    </CellSkill>
                    <CellSkill>
                        <BoxSkill skill='FaReact' >ReactJs</BoxSkill>
                    </CellSkill>
                    <CellSkill>
                        <BoxSkill skill='FaReact' >React Native</BoxSkill>
                    </CellSkill>
                    <CellSkill>
                        <BoxSkill skill='SiNextdotjs' >NextJs</BoxSkill>
                    </CellSkill>
                    <CellSkill>
                        <BoxSkill skill='DiMysql' >MySql</BoxSkill>
                    </CellSkill>
                    <CellSkill>
                        <BoxSkill skill='SiDocker' >Docker</BoxSkill>
                    </CellSkill>
                        
                </div>
                    
                               
                       
            </Content>
        </Container>
    );
};