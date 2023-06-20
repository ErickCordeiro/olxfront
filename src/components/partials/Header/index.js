import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styles.js';
import { isLogged } from '../../../helpers/AuthHandler.js';

const Header = () => {
    let logged = isLogged();

    return(
        <HeaderArea>
            <div className="header-container">
                <div className='header-container__logo'>
                    <Link to="/">
                        <img className="header-container__logo__img" src={process.env.PUBLIC_URL+'/olx-logo.png'} alt='Olx Clone' />
                    </Link>
                </div>
                <nav className='header-container__menu'>
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
                                <li><Link to="/my-ads">Sair</Link></li>
                                <li><Link to="/post-an-ad" className='header-container__button'>Anúncie aqui</Link></li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;