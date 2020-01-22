import React from 'react';

import BookAPI from './utils/BookAPI'

//Using Pages
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Search from './pages/Search'
import Saved from './pages/Saved'


const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">Search</Link>
        <Link to="/saved">Saved</Link>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
