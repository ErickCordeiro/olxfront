import styled from 'styled-components';

export const PageArea = styled.div`
    padding: 80px 0;

    .adInfo-container {
        h4 {
            margin: 64px 0 28px 0;
            font-size: 24px;
            color: #191919;
        }

        &__header {
            margin-bottom: 32px;
            h2 {
                font-size: 32px;
                color: #191919;
            }
    
            span {
                font-size: 14px;
                color: #555;
            }
        }

        &__wrapper {
            display: flex;
            justify-content: space-between;
            gap: 36px;

            &__description {
                flex: 1;

                img {
                    display: block;
                    width: 100%;
                    max-height: 600px;
                    object-fit: cover;
                }
                
                p {
                    margin-top: 18px;
                }
            }

            &__infos {
                width: 25%;

                & .card {
                    background-color: #7A63D6;
                    padding: 24px;
                    border-radius: 8px;
                    color: #fff;



                    span {
                        font-size: 32px;
                        font-weight: bold;
                    }
                }
            }
        }

        .adInfo-container__other{
            display: flex;
            justify-content: space-start;
            flex-wrap: wrap;
            gap: 20px;
            padding: 12px 0;
        }
    }
`;