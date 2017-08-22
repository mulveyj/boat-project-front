import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './Home';
import SailBoat from './SailBoat';
import NoMatch from './NoMatch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Wow. Boats.</h2>
        </div>
        <div>
          <h1>Lovely Boats</h1>
          <Router>
          <div>
            <Link to="/">Home</Link>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/sailboats" component={Home}/>
                <Route path="/sailboats/:boatId" component={SailBoat}/>
                <Route component={NoMatch}/>
              </Switch>
          </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
