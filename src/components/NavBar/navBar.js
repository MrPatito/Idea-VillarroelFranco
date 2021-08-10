import React from 'react';
import './navBar.css';
import CartWidget from './CartWidget/cartWidget'

// 
let style = {
    
     
};

const NavBar = () =>{
    return(
        
            <nav className='navBar'> 
                <div className="easterEgg">
                <h5>Muttuals</h5>
                </div>
                <li className="navItem">
                        <a href="index.html" className="navLink">
                            <img src="./Multimedia/icons8-house-64.png" alt="Index"/>
                            <span className="titulo">Home</span>
                        </a>
                </li>
                <li className="navItem">
                        <a href="index.html" className="navLink">
                            <img src="Multimedia/icons8-web-design-64.png" alt="Portfolio"/>
                            <span className="titulo">Home</span>
                        </a>
                </li>
                <li className="navItem">
                        <a href="index.html" className="navLink">
                            <img src="Multimedia/icons8-test-account-64.png" alt="Nosotras"/>
                            <span className="titulo">Home</span>
                        </a>
                </li>
                <li className="navItem">
                        <a href="index.html" className="navLink">
                            <img src="Multimedia/icons8-checkout-64.png" alt="Servicios"/>
                            <span className="titulo">Home</span>
                        </a>
                </li>
                <li className="navItem">
                        <a href="index.html" className="navLink">
                            <img src="Multimedia/icons8-contact-64.png" alt="Contacto"/>
                            <span className="titulo">Home</span>
                        </a>
                </li>
                <CartWidget/>
            </nav>
        );
    
}
export default NavBar;

