import React from 'react';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Signin from '../components/Signin/Signin'
import Home from '../components/Home/Home'
import RegisterCard from '../components/RegisterCard/RegisterCard'
import RegisterUser from '../components/RegisterUser/RegisterUser'

const StyledApp = styled.div `

`

function App() {
  return (
    <StyledApp>
      <Router>
        <Switch>
          <Route path='/registeruser'>
            <RegisterUser/>
          </Route>
          <Route path='/registercard'>
            <RegisterCard/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path="/">
            <Signin/>
          </Route>
        </Switch>
      </Router>
    </StyledApp>
  );
}

export default App;
