import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Homepage from './components/home/Homepage';
import User from './components/userlist/User';
import Update from './components/update/Update';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/users' exact>
          <User />
        </Route>
        <Route path='/user/:id'>
          <Update />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
