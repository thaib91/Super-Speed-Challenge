import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import Form from './components/Form';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super();

    this.state = {
      url: Math.floor(Math.random() * 1000000000)
    }
  }


  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/verylongandannoyingstringthatmakesnosense"
              render={() => <PageOne url={this.state.url} />}
            />
            <Route path={`/${this.state.url}`} component={PageTwo} />
            <Route path="/form" component={Form} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
