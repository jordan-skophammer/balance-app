import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home2";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" render={() => <Home />} />
      </BrowserRouter>
    );
  }
}

export default App;
