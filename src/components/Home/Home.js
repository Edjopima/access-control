import React from 'react';
import StyledHome from './StyledHome';
import Header from '../Header/Header';
import RoomCard from '../RoomCard/RoomCard';



const Home = () =>{

    let rooms = [1,2,3,4,5,6,7,8,9,10];
    return(
        <StyledHome>
            <Header/>
            <div className='Home-roomsContainer'>
                {rooms.map((name)=>
                    <RoomCard name={name}/>
                )}
            </div>
        </StyledHome>
    );
}

export default Home;