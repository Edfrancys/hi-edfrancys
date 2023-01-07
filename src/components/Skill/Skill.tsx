
import React from 'react';
import { DiCss3, DiGithubBadge, DiMysql } from 'react-icons/di';
import { FaHtml5, FaReact } from 'react-icons/fa';
import { SiDocker, SiJavascript, SiNextdotjs, SiPhp, SiTypescript } from 'react-icons/si';
import styled from 'styled-components';
import { Content } from '../Styles';

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

const BoxSkillStyle = styled.div`
    background-color: ${props => props.theme.colors.redLight};
    color: ${props => props.theme.colors.primary};
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-width: 150px;
    min-height: 150px;

    div{
        font-size: 45px;
    }
    p {
        font-size: 19px;
        margin-bottom: 0px;
        font-weight: 900;
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
                        <BoxSkillStyle>
                            <div>
                                <FaHtml5 />                  
                            </div>
                            <p>HTML 5</p>
                        </BoxSkillStyle>
                    </CellSkill>
                    <CellSkill>                        
                        <BoxSkillStyle>
                            <div>
                                <DiCss3 />                  
                            </div>
                            <p>CSS 3</p>
                        </BoxSkillStyle>
                    </CellSkill>
                    <CellSkill>
                        
                        <BoxSkillStyle>
                            <div>
                                <SiPhp />                  
                            </div>
                            <p>PHP</p>
                        </BoxSkillStyle>
                    </CellSkill>
                    <CellSkill>                        
                        <BoxSkillStyle>
                            <div>
                                <SiJavascript />                  
                            </div>
                            <p>JavaScript</p>
                        </BoxSkillStyle>
                    </CellSkill>
                    <CellSkill>                       
                        <BoxSkillStyle>
                            <div>
                                <SiTypescript />                  
                            </div>
                            <p>TypeScript</p>
                        </BoxSkillStyle>
                    </CellSkill>
                    <CellSkill>                        
                        <BoxSkillStyle>
                            <div>
                                <DiGithubBadge />                  
                            </div>
                            <p>Git/GitHub</p>
                        </BoxSkillStyle>
                    </CellSkill>
                    <CellSkill>                        
                        <BoxSkillStyle>
                            <div>
                                <FaReact />                  
                            </div>
                            <p>ReactJs</p>
                        </BoxSkillStyle>
                    </CellSkill>
                    <CellSkill>                        
                        <BoxSkillStyle>
                            <div>
                                <FaReact />                  
                            </div>
                            <p>React Native</p>
                        </BoxSkillStyle>
                    </CellSkill>
                    <CellSkill>                        
                        <BoxSkillStyle>
                            <div>
                                <SiNextdotjs />                  
                            </div>
                            <p>NextJs</p>
                        </BoxSkillStyle>
                    </CellSkill>
                    <CellSkill>                        
                        <BoxSkillStyle>
                            <div>
                                <DiMysql />                  
                            </div>
                            <p>MySql</p>
                        </BoxSkillStyle>
                    </CellSkill>
                    <CellSkill>
                        
                        <BoxSkillStyle>
                            <div>
                                <SiDocker />                  
                            </div>
                            <p>Docker</p>
                        </BoxSkillStyle>
                    </CellSkill>
                        
                </div>
                    
                               
                       
            </Content>
        </Container>
    );
};