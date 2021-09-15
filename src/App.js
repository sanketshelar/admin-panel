import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Homepage from './components/home/Homepage';
import User from './components/userlist/User';
import Update from './components/updateuser/Update';
import Create from './components/createuser/Create';
import Products from './components/productlist/Products';
import UpdateProd from './components/updateproduct/UpdateProd';
import CreateProd from './components/createproduct/CreateProd';

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
        <Route path='/user/:id' exact>
          <Update />
        </Route>
        <Route path='/newUser'>
          <Create />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/product/:id'>
          <UpdateProd />
        </Route>
        <Route path='/newProduct'>
          <CreateProd />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
