import React, { useState } from "react";
import { LoginContainer } from './styles.js';
import { Container, Card, AlertError } from '../../styled.js';
import { doLogin } from '../../helpers/AuthHandler';
import useApi from '../../helpers/OlxApi.js';

const SignIn = () => {
    const api = useApi();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setDisabled(true);
        setError('');

        const json = await api.signin(email, password);

        if(json.error){
            setError(json.message);
            setDisabled(false);
            return;
        }

        doLogin(json.token, remember);
        window.location.href = '/';

        setDisabled(false);
    }


    return (
        <>
            <Container>
                <LoginContainer>
                    <h1>Login</h1>
                    <Card>

                        {error &&
                            <AlertError>{error}</AlertError>
                        }
        
                        <form onSubmit={handleSubmit}>
                            <label>
                                <span>E-mail</span>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Digite seu e-mail" 
                                    required disabled={disabled}
                                    value={email}
                                    onChange={e=>setEmail(e.target.value)} />
                            </label>
                            <label>
                                <span>Senha</span> 
                                <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Digite sua senha" 
                                    required disabled={disabled}
                                    value={password}
                                    onChange={e=>setPassword(e.target.value)}/>
                            </label>

                            <label>
                                Lembrer senha
                                <input 
                                    type="checkbox" 
                                    name="remeber"
                                    checked={remember}
                                    onChange={() => setRemember(!remember)}/> 
                            </label>

                            <button>Acessar conta</button>
                        </form>
                    </Card>
                </LoginContainer>
            </Container>                        
        </>

    );
}

export default SignIn;