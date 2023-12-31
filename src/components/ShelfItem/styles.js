import styled from 'styled-components';

export const AdsArea = styled.div`
    .shelf-item {
        text-decoration: none;
        color: #191919;
        font-weight: normal;

        h3 {
            font-size: 18px;
        }
        p {
            font-size: 12px;
            color: #c9670c;
            font-weight: 600;
        }

        img {
            width: 100%;
            min-height: 185px;
            max-width: 250px;
            background-size: cover;
            object-fit: cover;
        }

        &:hover {
            color: #c9670c;
        }
    }
`;