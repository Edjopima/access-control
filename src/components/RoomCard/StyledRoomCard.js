import styled from 'styled-components';

const StyledRoomCard = styled.div `
    border: solid 3px #707070;
    height: 100px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:50px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    :hover{
        transform:scale(1.1);
        background-color:#7070702e;
    }
    .RoomCard-title {
        padding:1em;
        color: #707070;
    }
`
export default StyledRoomCard;