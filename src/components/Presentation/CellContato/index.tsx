import Link from 'next/link';
import React from 'react';
import {FaGithub, FaLinkedin, FaMailBulk} from 'react-icons/fa';
import styled from 'styled-components';

interface ItCellContatoHtml {
    name: string;
    href: string;
}


const CellContatoHtml = ({name, href}: ItCellContatoHtml) => {
    if (name === 'Github') {
        return (
            
            <Link href={href} className='button icon'>                
                <FaGithub />
                {name}                              
            </Link>               
            
        );
    } else if (name === 'Linkedin') {
        return (
            
            <Link href={href} className='button icon'>               
                <FaLinkedin />
                {name}                              
            </Link>               
            
        );
    } else if (name === 'Email') {
        return (
            
            <Link href={href} className='button icon'>               
                <FaMailBulk />
                {name}                               
            </Link>                
            
        );
    }
    
};

const CellContato = styled(CellContatoHtml)`    
`;

export default CellContato;