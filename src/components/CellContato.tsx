import Link from 'next/link';
import React from 'react';
import {FaGithub, FaLinkedin, FaMailBulk} from 'react-icons/fa';
import styled from 'styled-components';

interface ItCellContatoHtml {
    name: string;
    href: string;
}


const CellContatoHtml = ({name, href}: ItCellContatoHtml) => {
    if (name === 'github') {
        return (
            
            <Link href={href}>
                <a className='button'>
                    <FaGithub />
                    {name}               
                </a>
            </Link>               
            
        );
    } else if (name === 'linkedin') {
        return (
            
            <Link href={href}>
                <a className='button'>
                    <FaLinkedin />
                    {name}               
                </a>
            </Link>               
            
        );
    } else if (name === 'email') {
        return (
            
            <Link href={href}>
                <a className='button'>
                    <FaMailBulk />
                    {name}               
                </a>
            </Link>
        
        
            
        );
    }
    
};

const CellContato = styled(CellContatoHtml)`
    background-color: aqua;
    width: 40px;
    height: 40px;
`;

export default CellContato;