import styled from 'styled-components';

export const LoginContainer = styled.div`
    margin: 30px auto;
    max-width: 60%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
    }

    h1 {
        margin-bottom: 28px;

        @media screen and (max-width: 768px) {
            text-align: center;
        }
    }

    form {
        padding: 28px;

        label {
            display: block;
            width: 100%;
            margin-bottom: 14px;

            span {
                display: inline-block;
                width: 20%;

                @media screen and (max-width: 768px) {
                    width: 100%;
                    margin-bottom: 8px;
                }
            }

            input[type="email"], input[type="password"] {
                width: calc(100% - 20%);
                height: 38px;
                border: 1px solid #ccc;
                border-radius: 5px;
                padding: 8px;

                @media screen and (max-width: 768px) {
                    width: 100%;
                }
            }


            input[type="checkbox"] {
                width: 8%;
                height: 18px;
                display: inline-block;

                @media screen and (max-width: 768px) {
                    width: 18%;
                }
            }
        }

        button {
            margin-top: 10px;
            padding: 8px 18px;
            background-color: #EC7F19;
            border: none;
            border-radius: 4px;
            color: #fff;

            &:hover {
                background-color: #c9670c;
                cursor: pointer;
            }
        }
    }
`;