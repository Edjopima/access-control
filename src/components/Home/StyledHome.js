import styled from 'styled-components';

const StyledHome = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .Home-roomsContainer{
        display:grid;
        grid-template-columns: repeat(auto-fill,250px);
        width: 100%;
    }
`

export default StyledHome;