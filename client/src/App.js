import React, { PureComponent } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/Login" render={() => <Login />} />
          <Route path="/Register" render={(req, res) => <Register />} />
        </div>
      </Router>
    );
  }
}

export default App;
