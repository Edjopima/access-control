import React from 'react';
import StyledRoomPage from './StyledRoomPage';
import Header from '../Header/Header'
import {useLocation} from 'react-router-dom';

const RoomPage = () => {
    const location = useLocation()
    let actualRoute = location.pathname;
    let title = actualRoute.split('/')[2];
    let name = 'Eduardo Piña';
    let user = 'edjopima';
    let access = 'Acceso concedido';
    return (
        <StyledRoomPage>
        <Header/>
            <h1 className='RoomPage-title'>{title}</h1>
            <h1 className='RoomPage-subTitle'>Ultimo Acceso</h1>
            <div className='UserCard'>
                <p className='data'>{name}</p>
                <p className='data'>{user}</p>
                <p className='data'>{access}</p>
            </div>
        </StyledRoomPage>
    );
}

export default RoomPage;