import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { LoadsContext } from 'react-loads';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

import './style.css';

const basename = process.env.NODE_ENV === 'development' ? '/' : '/ticketmaster';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoadsContext.Provider>
        <Router basename={basename}>
          <React.Fragment>
            <Route path="/" exact component={HomePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/detail/:id" component={DetailPage} />
          </React.Fragment>
        </Router>
      </LoadsContext.Provider>
    );
  }
}

const container = document.getElementById('vm-app');

ReactDOM.render(<App/>, container);
