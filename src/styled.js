import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2%;
`;

export const Card = styled.div`
    padding: 15px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,.1)
`;

export const AlertError = styled.div`
    padding: 15px;
    background-color: #c96c6c;
    color: #fff;
    border-radius: 8px;
    border: 1px solid #bc3c3c;
    font-size: 14px;
`;

export const ButtonLink = styled.a`
    background-color: #EC7F19;
    border-radius: 4px;
    color: #fff !important;
    padding: 5px 20px;

    &:hover {
        background-color: #c9670c;
    }
`;