import React from 'react';
//Pages
import Home from './pages/Home';
import Favorites from './pages/Favorites';
//Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Styles
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
