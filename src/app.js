import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
      <Router basename={basename}>
        <React.Fragment>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/detail" component={DetailPage} />
        </React.Fragment>
      </Router>
    );
  }
}

const container = document.getElementById('vm-app');

ReactDOM.render(<App/>, container);
