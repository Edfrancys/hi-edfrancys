import React from 'react';

import {Navbar} from '../components/Navbar';
import { Portifolio } from '../components/Portifolio';
import { Presentation } from '../components/Presentation';
import { Skill } from '../components/Skill';


const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <Presentation />
            <Portifolio />       
            <Skill />     
        </>
    );
};

export default Home;

