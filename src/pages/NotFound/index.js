import React from "react";
import { Link } from 'react-router-dom';
import { NotFountArea } from './styles.js';
import { Container } from '../../styled.js';

const NotFound = () => {
    return (
        <>
        <Container>
            <NotFountArea>
                <h1>404</h1>
                <h6>Página não encontrada</h6>

                <Link to="/">Voltar para o início</Link>
            </NotFountArea>
        </Container>
        </>
    );
}

export default NotFound;