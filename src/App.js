import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Order } from './pages';

const App = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/order" component={ Order } />
      </Switch>
    </div>
  );
};

export default App;