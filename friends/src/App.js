import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from './Components/Login';
import Friends from './Components/FriendsList';
import PrivateRoute from './Components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='Navigation'>
          <Link to='/login'>Login</Link>
          <Link to='/protected'>Friends List</Link>
        </div>
        <Switch>
          <PrivateRoute exact path='/protected' component={Friends} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
