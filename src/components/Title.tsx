import React from 'react';
import styled from 'styled-components';

interface ItTitle {
    type: string;
    style?: string;
    children: React.ReactNode;
}

const Title = ({type, children}: ItTitle) => {
    if (type == 'h1'){
        return <h1>{children}</h1>;
    } else if (type == 'h2'){
        return <h2>{children}</h2>;
    } else if (type == 'h3'){
        return <h3>{children}</h3>;
    }
};

export default Title;