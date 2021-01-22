import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const StyledHome = styled.div `
    .data{
        font-family: Roboto;
        font-style: normal;
        padding: 0%;
        margin: 0%;
        font-size: 35px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.31;
        letter-spacing: normal;
        text-align: left;
        color: #707070;
    }
    .UserCard{
        display: flex;
        flex-flow: column;
        align-items: center;
        padding-top: 12em;
        padding-bottom: 1em;
    }
    .profilePhoto{
        padding-top: 6em;
        padding-bottom: 1em;
    }
`

const Home = () =>{
    let name = 'Eduardo Piña';
    let user = 'edjopima';
    let access = 'Acceso concedido';

    return(
        <StyledHome>
            <Header/>
            <div className='UserCard'>
                <p className='data'>{name}</p>
                <p className='data'>{user}</p>
                <p className='data'>{access}</p>
            </div>
        </StyledHome>
    );
}

export default Home;