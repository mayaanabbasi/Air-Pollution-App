import React from 'react';
import Info from './Components/Info';
import AirPollution from './Components/AirPollution';
import MapView from './Components/MapView';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Info} exact />
          <Route path="/aqi" component={AirPollution} exact />
          <Route path="/map" component={MapView} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
