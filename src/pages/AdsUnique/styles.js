import styled from 'styled-components';

export const BreadCrumb = styled.div`
    padding: 20px 0;

    a { 
        color: #2fb8fc;
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;

        &:last-child {
            color: #c9670c;
        }
    }

    span {
        color: #2fb8fc;
        font-size: 14px;
        font-weight: bold;
    }
`;

export const PageArea = styled.div`
    padding-bottom: 80px;

    .adInfo-container {
        h4 {
            margin: 64px 0 28px 0;
            font-size: 24px;
            color: #191919;
        }

        &__header {
            margin: 14px 0 22px 0;
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

                .slide-container {
                    width: 100%;
                    height: 600px;
                    margin-right: 20px;

                    .each-slide {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-size: cover;

                        img {
                            display: block;
                            width: 100%;
                            object-fit: cover;
                        }
                    }
                }
                
                p {
                    margin-top: 18px;
                    color: #666;
                    font-weight: bold;
                    font-size: 14px;

                    a {
                        text-decoration: none;
                        color: #c9670c
                    }
                }

                p.ad-description {
                    font-size: 18px;
                    font-weight: normal;
                    line-height: 24px;
                }
            }

            &__infos {
                width: 350px;

                & .card {
                    background-color: #7A63D6;
                    padding: 24px;
                    border-radius: 8px;
                    color: #fff;
                    margin-bottom: 20px;

                    span {
                        font-size: 32px;
                        font-weight: bold;
                    }
                }
            }

            .userInfos {
                h5 {
                    font-size: 26px;
                    font-weight: normal;
                    margin-bottom: 20px;
                }

                p {
                    margin: 20px 0;

                    span {
                        font-weight: bold;
                    }
                }

                .button-link {
                    width: 100%;
                    padding: 18px 0;
                    display: block;
                    text-align: center;
                    text-decoration: none;
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