import styled from 'styled-components';

const StyledRoomPage = styled.div `
    .RoomPage-title{
        text-align: center;
        color: #707070;
        font-size:40px
    }
    .RoomPage-subTitle{
        text-align: center;
        color: #707070;
        font-size: 38px;
    }
    .data{
        font-family: Roboto;
        font-style: normal;
        padding: 0%;
        margin: 0%;
        font-size: 35px;
        text-align: left;
        color: #707070;
    }
    .UserCard{
        display: flex;
        flex-flow: column;
        align-items: center;
        padding-top: 1em;
        padding-bottom: 1em;
    }
    .profilePhoto{
        padding-top: 6em;
        padding-bottom: 1em;
    }
`
export default StyledRoomPage;