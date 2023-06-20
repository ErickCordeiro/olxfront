import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2%;
`;

export const ButtonLink = styled.a`
    background-color: #EC7F19;
    border-radius: 4px;
    color: #fff;
    padding: 5px 20px;

    &:hover {
        background-color: #c9670c;
    }

    a {
        text-decoration: none;
        color: #fff;
    }
`;