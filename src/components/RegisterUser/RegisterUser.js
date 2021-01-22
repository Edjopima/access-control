import React,{useState} from 'react';
import Header from '../Header/Header';
import StyledRegisterUser from './StyledRegisterUSer';

const RegisterUser = ()=> {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');

    const clearInputs = ()=> {
        setName('');
        setEmail('');
        setUser('');
        setPassword('');
    }

    const handleRegister = () => {
        console.log(name,email,user,password);
        clearInputs();
    }
    return(
        <StyledRegisterUser>
            <Header/>
            <div className='registerBox'>
                <h1>Registrar Usuario</h1>
                <div className='registerForm'>
                    <input onChange={(event)=>setName(event.target.value)} placeholder="Nombre y apellido" type="text" class="input" value={name}/>
                    <input onChange={(event)=>setUser(event.target.value)} placeholder="Usuario" type="text" class="input" value={user}/>
                    <input onChange={(event)=>setEmail(event.target.value)} placeholder="Email" type="text" class="input" value={email}/>
                    <input onChange={(event)=>setPassword(event.target.value)} placeholder="Contraseña" type="password" class="input" value={password}/>
                    <button onClick={()=>handleRegister()} className='boton'>Registrar</button>
                </div>
            </div>
        </StyledRegisterUser>
    );
}

export default RegisterUser;