import React from 'react';
import { FaHtml5, FaReact } from 'react-icons/fa';
import { DiCss3, DiMysql, DiGithubBadge } from 'react-icons/di';
import { SiNextdotjs, SiDocker, SiTypescript, SiJavascript, SiPhp } from 'react-icons/si';
import styled from 'styled-components';

interface ItBoxSkill {
    skill: string;
    children: React.ReactNode
}

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

const BoxSkill = ({skill ,children}: ItBoxSkill) => {
    
    
    if (skill == 'FaHtml5') {
        return (
            <BoxSkillStyle>
                <div>
                    <FaHtml5 />                  
                </div>
                <p>{children}</p>
            </BoxSkillStyle>
        );    
    }
    else if (skill == 'FaReact') {
        return (
            <BoxSkillStyle>
                <div>
                    <FaReact />                  
                </div>
                <p>{children}</p>
            </BoxSkillStyle>
        );    
    }
    else if (skill == 'SiJavascript') {
        return (
            <BoxSkillStyle>
                <div>
                    <SiJavascript />                  
                </div>
                <p>{children}</p>
            </BoxSkillStyle>
        );    
    }
    else if (skill == 'DiCss3') {
        return (
            <BoxSkillStyle>
                <div>
                    <DiCss3 />                  
                </div>
                <p>{children}</p>
            </BoxSkillStyle>
        );    
    }
    else if (skill == 'SiNextdotjs') {
        return (
            <BoxSkillStyle>
                <div>
                    <SiNextdotjs />                  
                </div>
                <p>{children}</p>
            </BoxSkillStyle>
        );    
    }
    else if (skill == 'DiMysql') {
        return (
            <BoxSkillStyle>
                <div>
                    <DiMysql />                  
                </div>
                <p>{children}</p>
            </BoxSkillStyle>
        );    
    }
    else if (skill == 'SiDocker') {
        return (
            <BoxSkillStyle>
                <div>
                    <SiDocker />                  
                </div>
                <p>{children}</p>
            </BoxSkillStyle>
        );    
    }
    else if (skill == 'SiTypescript') {
        return (
            <BoxSkillStyle>
                <div>
                    <SiTypescript />                  
                </div>
                <p>{children}</p>
            </BoxSkillStyle>
        );    
    }
    else if (skill == 'SiPhp') {
        return (
            <BoxSkillStyle>
                <div>
                    <SiPhp />                  
                </div>
                <p>{children}</p>
            </BoxSkillStyle>
        );    
    }
    else if (skill == 'DiGithubBadge') {
        return (
            <BoxSkillStyle>
                <div>
                    <DiGithubBadge />                  
                </div>
                <p>{children}</p>
            </BoxSkillStyle>
        );    
    }
  
    
};



export default BoxSkill;