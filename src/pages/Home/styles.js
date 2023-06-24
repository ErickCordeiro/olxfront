import styled from 'styled-components';

export const SearchContainer = styled.div`
    background-color: #7A63D6;
    padding: 64px 0;

    .search-container {
        display: flex;

        form {
            flex: 1;
            display: flex;

            input {
                flex: 1;
                height: 60px;
                border: none;
                outline: none;
                font-size: 18px;
                color: #000;
                padding: 18px 20px;
                border-radius: 8px 0px 0px 8px;
            }

            button {
                flex-basis: 5%;
                height: 60px;
                padding: 18px 20px;
                border: none; 
                background-color: #eee;
                border-radius: 0px 8px 8px 0px;

                svg {
                    width: 22px;
                    height: 22px;
                }
            }
        }
    }

    .category-container {
        padding: 36px 0 0 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 32px;

        .category-link {
            text-decoration: none;
            display: flex;
            justify-content: center;
            flex-direction: column;

            div {
                background-color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 64px;
                height: 64px;
                border-radius: 50%;
                margin: 8px auto;
                transition: 0.2s;

                img {
                    width: 32px;
                }
            }

            span {
                color: #FFF;
                font-size: 14px;
                text-align: center;
                display: inline-block;
            }
        }
    }

`;