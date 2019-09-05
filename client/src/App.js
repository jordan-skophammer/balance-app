import React, { PureComponent } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Expenses from './pages/Expenses'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      loggedIn: false
    }
  }

  handler(data) {
    console.log(data)
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/expenses" render={() => <Expenses />} />
          <Route path="/login" render={() => <Login handler={this.handler} />} />
          <Route path="/register" render={() => <Register />} />
        </div>
      </Router>
    )
  }
}

export default App;
