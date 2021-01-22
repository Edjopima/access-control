import React, {useState} from 'react';
import StyledSignin from './StyledSignin';
import {useHistory} from 'react-router-dom';

const Signin = () =>{
    const history = useHistory();

    const [user,setUser]=useState('');
    const [password,setPassword]=useState('');

    const handleSignin = () => {
        console.log(user,password);
        history.push('/home')
    }

    return(
        <StyledSignin>
            <div className='signinForm'>
                <h1>Iniciar Sesion</h1>
                <input onChange={(event)=>setUser(event.target.value)} placeholder="Usuario" type="text" class="input"/>
                <input onChange={(event)=>setPassword(event.target.value)} placeholder="Contraseña" type="password" class="input"/>
                <button onClick={()=>{handleSignin()}} className='boton pointer'>Iniciar Sesion</button>
            </div>
        </StyledSignin>
    );
}

export default Signin;