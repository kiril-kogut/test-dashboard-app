import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Profile from './tabs/Profile';
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
            <Route exact path="/" component={Profile} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Main;
