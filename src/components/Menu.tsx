import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { FaCode } from 'react-icons/fa';

const Navbar = styled.nav`
    position: fixed;
    background-color: ${props => props.theme.colors.blueLight};
    width: 100vw;      
    padding: 15px 0;
    z-index: 10;

    display: flex;
    justify-content: center;
`;

const NavContainer = styled.div`
    width: 90%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Menu = () => {
    return(
        <Navbar>
            <NavContainer>
                <div>
                    <Link href="#" >
                        <a className='button'><FaCode /> DevEdy</a>
                    </Link>                   
                </div>
                <div>
                    <Link href="#Home" >
                        <a className='navButton'>Home</a>
                    </Link>
                    <Link href="#Portifolio" >
                        <a className='navButton'>Portifólio</a>
                    </Link>       
                    <Link href="#Skill" >
                        <a className='navButton'>Skills</a>
                    </Link>               
                </div>
            </NavContainer>
            
        </Navbar>
    );
};

export default Menu;