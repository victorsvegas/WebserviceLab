import React from 'react';
import Home from './home';
import Header from './header';
import WebserviceSuperheroes from './webservice_superheroes';
import WebserviceGroup from './webservice_group';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Header/>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/webservice_superheroes" component={WebserviceSuperheroes}></Route>
          <Route path="/webservice_group" component={WebserviceGroup}></Route>
          <Route path="/" component={Home}></Route> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
