import React from 'react';
import { useHistory } from "react-router-dom";
import StyledHeader from './StyledHeader';


const Header = () =>{
    const history = useHistory();

    const changeRoute = (route)=> {
        history.push(route);
    }

    return(
        <StyledHeader>
            <img width='50px' height='50px'  className='Header-logo' alt='logo'/>
            <p className='Header-item' onClick={()=>changeRoute('/home')} >Control de Acceso</p>
            <p className='Header-item' onClick={()=>changeRoute('/registeruser')} >Registrar Usuario</p>
            <p className='Header-item' onClick={()=>changeRoute('/registercard')} >Registrar Tarjeta</p>
            <p className='Header-item signout' onClick={()=>changeRoute('/')} >Cerrar Sesion</p>
        </StyledHeader>
    );
}

export default Header;