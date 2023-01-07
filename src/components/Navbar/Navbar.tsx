import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {FaCode} from 'react-icons/fa';

const NavBar = styled.nav`
    width: 100%;
    min-height: 60px;
    background-color: ${({theme}) => theme.colors.blueLight};

    padding: 0 2rem;
    display: flex;
    justify-content: center;
    
    @media (max-width: 768px) {       
    }
    @media (max-width: 576px) {    
        padding: 0 1.5rem;    
    }
`;
const NavBarContent = styled.nav`
    width: 1140px;
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

    
    
    @media (max-width: 768px) {       
    }
    @media (max-width: 576px) {        
    }
`;

export const Navbar: React.FC = () => {
    return (
        <NavBar>
            <NavBarContent>
                <div>
                    <Link href="#" className='button icon'>
                        <FaCode /> DevEdy
                    </Link>                   
                </div>
                <div>
                    <Link href="#Home" className='button nav'>
                        Home
                    </Link>
                    <Link href="#Portifolio" className='button nav'>
                        Portifólio
                    </Link>       
                    <Link href="#Skill" className='button nav'>
                        Skills
                    </Link>               
                </div>
            </NavBarContent>
        </NavBar>
    );
};