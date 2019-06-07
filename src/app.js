import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { LoadsContext } from 'react-loads';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoadsContext.Provider>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/detail/:id" component={DetailPage} />
            <Route component={HomePage} />
          </Switch>
        </Router>
      </LoadsContext.Provider>
    );
  }
}

const container = document.getElementById('vm-app');

ReactDOM.render(<App/>, container);
