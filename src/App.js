import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import createStore from './redux';
import Main from './screens/Main';

const store = createStore();

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Main} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
