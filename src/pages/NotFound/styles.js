import styled from 'styled-components';

export const NotFountArea = styled.div`
    text-align: center;
    min-height: 60vh;
    padding: 100px 0;

    h1 {
        font-size: 128px;
        font-weight: bold;
        color: #333333;
    }

    h6 {
        font-size: 52px;
        font-weight: 300;
        margin-bottom: 48px;
        color: #333333;
    }

    a {
        text-decoration: none;
        background-color: #EC7F19;
        border-radius: 4px;
        color: #fff !important;
        padding: 5px 20px;
    
        &:hover {
            background-color: #c9670c;
        }
    }
`;