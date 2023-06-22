import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styles.js';
import { Container, ButtonLink } from '../../../styled.js';
import { isLogged, doLogout } from '../../../helpers/AuthHandler.js';

const Header = () => {
    let logged = isLogged();

    const handleLogout = () => {
        doLogout();
        window.location.href = "/";
    }

    return(
        <HeaderArea>
            <Container>
                <div className="header-wrapper">
                    <div className='header-wrapper__logo'>
                        <Link to="/">
                            <img className="header-wrapper__logo__img" src={process.env.PUBLIC_URL+'/olx-logo.png'} alt='Olx Clone' />
                        </Link>
                    </div>
                    <nav className='header-wrapper__menu'>
                        <ul>
                            {!logged && 
                                <>
                                    <li><Link to="/signin">Login</Link></li>
                                    <li><Link to="/signup">Cadastre-se</Link></li>
                                </>
                            }
                            {logged &&
                                <>
                                    <li><Link to="/my-account">Minha conta</Link></li>
                                    <li><Link to="/my-ads">Meus anúncios</Link></li>
                                    <li><button onClick={handleLogout}>Sair</button></li>
                                    <li><Link to="/post-an-ad" className='header-wrapper__button'>
                                        <ButtonLink>Anúncie aqui</ButtonLink></Link></li>
                                </>
                            }
                        </ul>
                    </nav>
                </div>
            </Container>
        </HeaderArea>
    );
}

export default Header;