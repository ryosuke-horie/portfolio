import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';
import Example from './pages/Example';

  function App() {
    return (
        <div>
            <Switch>
                {/* この中にルーティングを書くことになる */}
                <Route path='/example' exact component={Example} />
            </Switch>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))