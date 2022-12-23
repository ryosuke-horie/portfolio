import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';     // TOP
import Ielove from './pages/Ielove'; // いえらぶページ
import Mamiya from './pages/Mamiya'; // マミヤITSページ

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/ielove' exact component={Ielove} />
        <Route path='/mamiya' exact component={Mamiya} />
      </Switch>
    </div>
  );
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'))
