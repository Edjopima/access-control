import styled from 'styled-components';

const StyledHeader = styled.div `
    display: flex;
    flex-direction: row;
    background-color: #3a496a;
    border: none;
    justify-content: space-around;
    align-items: center;
    width: 100%;

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
export default StyledHeader;