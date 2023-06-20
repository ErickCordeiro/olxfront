import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styles.js';
// import logo from './../../../../public/olx-logo.png';

const Header = () => {
    return(
        <HeaderArea>
            <div className="header-container">
                <div className='header-container__logo'>
                    <Link to="/">
                        <img className="header-container__logo__img" src={process.env.PUBLIC_URL+'/olx-logo.png'} alt='Olx Clone' />
                    </Link>
                </div>
                <nav className='header-container__menu'>
                    <ul className='header-container__menu__nav'>
                        <li className='header-container__menu__nav__link'><Link to="">Login</Link></li>
                        <li className='header-container__menu__nav__link'><Link to="">Cadastre-se</Link></li>
                        <li className='header-container__menu__nav__link'><Link to="" className='header-container__menu__nav__button'>Anúncie aqui</Link></li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;