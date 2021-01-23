import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import RoomCard from '../RoomCard/RoomCard';

const StyledHome = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    .Home-roomsContainer{
        display:grid;
        grid-template-columns: repeat(auto-fill,250px);
        width: 100%;
    }
`

const Home = () =>{
    let name = 'Eduardo Piña';
    let user = 'edjopima';
    let access = 'Acceso concedido';
    let rooms = [1,2,3,4,5,6,7,8,9,10];
    return(
        <StyledHome>
            <Header/>
            <div className='Home-roomsContainer'>
                {rooms.map((name)=>
                    <RoomCard name={name}/>
                )}
            </div>
{/*             <div className='UserCard'>
                <p className='data'>{name}</p>
                <p className='data'>{user}</p>
                <p className='data'>{access}</p>
            </div> */}
        </StyledHome>
    );
}

export default Home;