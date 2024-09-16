import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding: 6rem 2rem;
    display: flex;    
    justify-content: center;
`;

export const Content = styled.div`
    width: 1140px;
    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
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