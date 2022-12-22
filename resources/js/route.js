import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';
import Ielove from './pages/Ielove';
import Home from './pages/Home';

  function App() {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/ielove' exact component={Ielove} />
            </Switch>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
