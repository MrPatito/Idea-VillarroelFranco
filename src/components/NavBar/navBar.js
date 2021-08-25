import {NavLink, useHistory} from 'react-router-dom'
import React from 'react';
import './navBar.css';
import CartWidget from './CartWidget/cartWidget'




// 
let style = {
    
     
};

const NavBar = () =>{
    const history = useHistory();

    const id = 152
    const pagar = () => history.push(`/category/${id}`);

    
    
    
    return(
        
            <nav className='navBar'> 
                <NavLink to='/'>
                    <div className="easterEgg">
                        <h5>Muttuals</h5>                
                </div>
                </NavLink>
                <li className="navItem">
                        <NavLink to="/">
                            <img src="./Multimedia/icons8-house-64.png" alt="Index"/>
                        </NavLink> 
                        
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
                        <NavLink to={`/category/${id}`}>
                            <img src="Multimedia/icons8-checkout-64.png" alt="Servicios"/>
                        </NavLink>
                            
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

