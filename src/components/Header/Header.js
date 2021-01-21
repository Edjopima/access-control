import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const StyledHeader = styled.div `
    display: flex;
    flex-direction: row;
    background-color: #3a496a;
    border: none;
    justify-content: space-around;
    align-items: center;

    .Header-logo{
        padding: 1em;
    }
    .Header-item{
        padding-left: 1em;
        padding-right: 1em;
        font-size: 23px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.31;
        letter-spacing: normal;
        text-align: left;
        color: #dcdcdc;
        cursor: pointer;
    }

    .signout{
        justify-self: flex-end;
    }
`

const Header = () =>{
    const history = useHistory();

    const changeRoute = (route)=> {
        history.push(route);
    }

    return(
        <StyledHeader>
            <img width='50px' height='50px'  className='Header-logo' />
            <p className='Header-item' onClick={()=>changeRoute('/')} >Control de Acceso</p>
            <p className='Header-item' onClick={()=>changeRoute('/registeruser')} >Registrar Usuario</p>
            <p className='Header-item' onClick={()=>changeRoute('/registercard')} >Registrar Tarjeta</p>
            <p className='Header-item signout' onClick={()=>changeRoute('/signin')} >Cerrar Sesion</p>
        </StyledHeader>
    );
}

export default Header;