import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import MomentUtils from '@date-io/moment';
import createStore from './redux';
import Main from './screens/Main';
import defaultTheme from './themes/default';

const store = createStore();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
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
    </ThemeProvider>
  );
}

export default App;
