import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import GlobalState from './context/GlobalState';
import ContactList from './pages/ContactList';
import CreateEditContact from './pages/CreateEditContact';

//Material UI
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const App = () => (
  <Router>
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Button>Contact List</Button>
          </Link>
          <Link to="/create-edit-contact">
            <Button>Create Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <GlobalState>
        <Switch>
          <Route path="/create-edit-contact/:id?">
            <CreateEditContact />
          </Route>
          <Route path="/">
            <ContactList />
          </Route>
        </Switch>
      </GlobalState>
    </div>
  </Router>
);

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
