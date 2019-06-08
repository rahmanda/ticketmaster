import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoadsContext } from 'react-loads';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoadsContext.Provider>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route component={HomePage} />
        </Switch>
      </LoadsContext.Provider>
    );
  }
}

export default App;
