import React, { useState, useEffect } from "react";
import { LoginContainer } from './styles.js';
import { Container, Card, AlertError } from '../../styled.js';
import { doLogin } from '../../helpers/AuthHandler';
import useApi from '../../helpers/OlxApi.js';

const SignUp = () => {
    const api = useApi();

    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const [stateList, setStateList] = useState([]);

    useEffect(() => {
        const getState = async () => {
            try {
                const slist = await api.getStates();
                setStateList(slist);
            } catch (error) {
                console.error('Error na requisição: ', error);
            }
        }

        getState();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setDisabled(true);
        setError('');

        if(password !== confPassword) {
            setError('Senhas digitadas não estão iguais, verifique!');
            setDisabled(false);
            return;
        }

        const json = await api.signup(name, state, email, password);

        if(json.error){
            setError(json.message);
            setDisabled(false);
            return;
        }

        doLogin(json.token);
        window.location.href = '/';

        setDisabled(false);
    }

    console.log(stateList);


    return (
        <>
            <Container>
                <LoginContainer>
                    <h1>Cadastro</h1>
                    <Card>

                        {error &&
                            <AlertError>{error}</AlertError>
                        }
        
                        <form onSubmit={handleSubmit}>
                            <label>
                                <span>Nome Completo</span>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Digite seu nome completo" 
                                    required disabled={disabled}
                                    value={name}
                                    onChange={e=>setName(e.target.value)} />
                            </label>
                            <label>
                                <span>Estado</span>
                                <select 
                                    name="state" 
                                    required 
                                    disabled={disabled}
                                    value={state}
                                    onChange={e=>setState(e.target.value)} >
                                        <option>Selecione</option>
                                        {stateList && 
                                            <>
                                                {stateList.map((item, index) => {
                                                    return <option key={index} value={item._id}>{item.name}</option>
                                                })}
                                            </>
                                        }
                                        
                                </select>
                            </label>
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
                                <span>Confirmar Senha</span> 
                                <input 
                                    type="password" 
                                    name="conf_password" 
                                    placeholder="Digite sua senha novamente" 
                                    required disabled={disabled}
                                    value={confPassword}
                                    onChange={e=>setConfPassword(e.target.value)}/>
                            </label>

                            <button>Cadastre-se</button>
                        </form>
                    </Card>
                </LoginContainer>
            </Container>                        
        </>

    );
}

export default SignUp;