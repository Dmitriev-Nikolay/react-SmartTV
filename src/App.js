import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Home, Order } from './pages';

const App = () => {
  return (
    <div className="wrapper">
      <Route exact path="/" component={ Home } />
      <Route exact path="/order" component={ Order } />
      <Redirect from='/' to='/' />
    </div>
  );
};

export default App;