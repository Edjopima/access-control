import React from 'react';
import StyledRoomCard from './StyledRoomCard';
import {useHistory} from 'react-router-dom';

const RoomCard = ({name, key}) => {
    const history = useHistory();

    const changeRoute = (route)=>{
        history.push(route);
    }

    return (
        <StyledRoomCard >
            <h1 onClick={()=>changeRoute(`/room/${name}`)} className='RoomCard-title'>{name}</h1>
        </StyledRoomCard>
    );
}

export default RoomCard;