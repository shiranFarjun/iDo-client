import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Routes from '../../router/Routes'

import { Button } from '../Button'
import './Navbar.css'

import img from '../../img/logo.png'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const style={
        width:'5rem',
        height:'3rem', 
    }

    return <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to={Routes.home}  onClick={closeMobileMenu} >
                    <img className="navbar-logo" src={img} alt='' style={style} />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   
                    <li className='nav-item'>
                        <Link to={Routes.location} className='nav-links' onClick={closeMobileMenu}>
                            Location
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={Routes.catering} className='nav-links' onClick={closeMobileMenu}>
                            Catering food
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={Routes.design} className='nav-links' onClick={closeMobileMenu}>
                            Design
                        </Link>
                    </li>
                </ul>
                {button && <Button path={Routes.Login} buttonStyle='btn-outline'>LOGIN</Button>}
                {button && <Button path={Routes.signUp} buttonStyle='btn-outline'>SIGN UP</Button>}
            </div>
        </nav>

    </>
};

export default Navbar
