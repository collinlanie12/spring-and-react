import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
