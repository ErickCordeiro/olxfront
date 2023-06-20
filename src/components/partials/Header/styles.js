import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color: #fff;
    padding: 10px 0;
    border-bottom: 1px solid #cccccc;
    height: 60px;

    .header-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 2%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header-container__logo__img {
        width: 60px;
    }

    nav {
        padding: 10px 0;

        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        ul {
            display: flex;
            align-items: center;
        }

        li {
            margin: 0 20px;

            a {
                text-decoration: none;
                color: #000;
                font-size: 14px;

                &:hover {
                    color: #EC7F19;
                }

                &.header-container__button {
                    background-color: #EC7F19;
                    border-radius: 4px;
                    color: #fff;
                    padding: 5px 20px;

                    &:hover {
                        background-color: #c9670c;
                    }
                }
            }
        }
    }
`;