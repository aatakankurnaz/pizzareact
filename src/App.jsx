import React from 'react';
import './App.css';
import AnaSayfa from './components/AnaSayfa';
import { GlobalStyle } from './globalStyle';
import Form from './components/Form';
import { Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <GlobalStyle /> 
      <Switch>
        <Route path="/" exact>
        <AnaSayfa /> 
        </Route>
        <Route path="/form">
        <Form />
        </Route>

      </Switch>
    </>
  );
}

export default App;
