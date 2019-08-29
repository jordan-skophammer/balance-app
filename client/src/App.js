import React, { PureComponent } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Expenses from './pages/Expenses'

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/expenses" render={() => <Expenses />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/register" render={() => <Register />} />
        </div>
      </Router>
    );
  }
}

export default App;
