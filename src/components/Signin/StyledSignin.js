import styled from 'styled-components';

const StyledSignin = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10rem;
    .signinForm{
        display: flex;
        flex-direction: column;
        height:auto;
        width: 500px;
        padding: 1em;
    }


    h1{
        text-align: center;
        color: #707070;
    }

    .registro{
        font-size: 50px;
    }
    .input{
        font-size: 25px;
        font-style: italic;
        background-color: #c2dcf2;
        border: 0px;
        border-bottom: 1px solid #707070;
        color: #707070;
        padding-bottom: 4px;
        margin-bottom: 45px;
        outline: none;
    }
    .boton{
        align-self: center;
        height: 40px;
        width: 150px;
        background-color: #3a496a;
        border-radius: 5px;
        color: #dddddd;
        border-color: #3a496a;
        border-style: none;
        outline: none;
        cursor: pointer;
    }

    .boton2{
        align-self: center;
        height: 40px;
        width: 200px;
        background-color: #3a496a;
        border-radius: 5px;
        color: #dddddd;
        border-color: #3a496a;
        border-style: none;
        outline: none;
        cursor: pointer;
    }
`
export default StyledSignin;