import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import NoPage from './components/NoPage';
import Listdrug from './components/managedrug/Listdrug';
import Adddrug from './components/managedrug/Adddrug';
import Deletedrug from './components/managedrug/Deletedrug';
import Viewdrug from './components/managedrug/Viewdrug';
import Editdrug from './components/managedrug/Editdrug';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route exact path='/' component={Listdrug} />
          <Route exact path='/add-drug' component={Adddrug} />
          <Route exact path='/delete-drug/*' component={Deletedrug} />
          <Route exact path='/view-drug/*' component={Viewdrug} />
          <Route exact path='/edit-drug/*' component={Editdrug} />

          <Route component={NoPage} />

        </Switch>
      </Router>
    );
  }
};

export default App;
