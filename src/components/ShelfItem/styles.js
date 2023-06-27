import styled from 'styled-components';

export const AdsArea = styled.div`
    .shelf-item {
        text-decoration: none;
        color: #191919;
        font-weight: normal;

        h3 {
            font-size: 18px;
        }

        img {
            width: 100%;
            max-width: 250px;
            background-size: cover;
        }

        &:hover {
            color: #c9670c;
        }
    }
`;