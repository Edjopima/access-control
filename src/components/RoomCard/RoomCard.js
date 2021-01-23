import React from 'react';
import StyledRoomCard from './StyledRoomCard';

const RoomCard = ({name}) => {
    return (
        <StyledRoomCard>
            <h1 className='RoomCard-title'>{name}</h1>
        </StyledRoomCard>
    );
}

export default RoomCard;