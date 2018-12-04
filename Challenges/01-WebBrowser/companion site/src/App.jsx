import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import Form from './components/Form'

class App extends Component {


  render() {
    return (

      <div className="App">
        <HashRouter>
          <Switch>
            <Route path="/verylongandannoyingstringthatmakesnosense" component={PageOne} />
            <Route path="/426f6220526f7373206973207" component={PageTwo} />
            <Route path="/form" component={Form} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
