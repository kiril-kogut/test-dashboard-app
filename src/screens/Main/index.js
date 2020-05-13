import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Profile from './tabs/Profile';
import Dashboard from './tabs/Dashboard';
import Order from './tabs/Order';
import Inventory from './tabs/Inventory';
import History from './tabs/History';
import useStyles from './styles';

const Main = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <Header />
        <div className={styles.content}>
          <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/inventory" component={Inventory} />
            <Route exact path="/history" component={History} />
            <Redirect to="/profile" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Main;
